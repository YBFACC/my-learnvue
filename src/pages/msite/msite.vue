<template>
  <div>
    <head-top signin-up="msite">
      <router-link :to="'/search/geohash'" class="link_search" slot="search">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <circle
            cx="8"
            cy="8"
            r="7"
            stroke="rgb(255,255,255)"
            stroke-width="1"
            fill="none"
          />
          <line
            x1="14"
            y1="14"
            x2="20"
            y2="20"
            style="stroke:rgb(255,255,255);stroke-width:2"
          />
        </svg>
      </router-link>
      <template #msite-title>
        <router-link to="/home" class="msite_title">
          <span class="title_text ellipsis">{{ msiteTitle }}</span>
        </router-link>
      </template>
    </head-top>
    <nav class="msite_nav">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
        <div class="swiper-wrapper">
          <!-- slides -->
          <swiper-slide class="food_types_container">
            <router-link to="/" class="link_to_food"
              ><figure></figure
            ></router-link>
          </swiper-slide>
        </div>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </nav>

    <foot-guide></foot-guide>
  </div>
</template>

<script>
import headTop from '@/components/header/head'
import footGuide from '@/components/footer/footer'

import { cityGuess, msiteAddress } from '../../service/getData'
import { mapMutations } from 'vuex'

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      geohash: '', // city页面传递过来的地址geohash
      foodTypes: [], // 食品分类列表
      msiteTitle: '请选择地址', // msite页面头部标题
      hasGetData: false, //是否已经获取地理位置数据，成功之后再获取商铺列表信息
      swiperOption: {
        pagination: {
          type: 'fraction',
          loop: true
        }
      }
    }
  },
  components: {
    headTop,
    footGuide,
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    ...mapMutations(['RECORD_ADDRESS', 'SAVE_GEOHASH'])
  },
  async beforeMount() {
    if (!this.$route.query.geohash) {
      const address = await cityGuess()
      this.geohash = address.latitude + ',' + address.longitude
    } else {
      this.geohash = this.$route.query.geohash
    }
    //保存geohash 到vuex
    this.SAVE_GEOHASH(this.geohash)
    //获取位置信息
    let res = await msiteAddress(this.geohash)
    this.msiteTitle = res.name
    // 记录当前经度纬度
    this.RECORD_ADDRESS(res)

    this.hasGetData = true
  },
  mounted() {
    //console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)

    // //获取导航食品类型列表
    // msiteFoodTypes(this.geohash)
    //   .then(res => {
    //     let resLength = res.length
    //     let resArr = [...res] // 返回一个新的数组
    //     let foodArr = []
    //     for (let i = 0, j = 0; i < resLength; i += 8, j++) {
    //       foodArr[j] = resArr.splice(0, 8)
    //     }
    //     this.foodTypes = foodArr
    //   })
    //   .then(() => {
    //     //初始化swiper
    //     new Swiper('.swiper-container', {
    //       pagination: '.swiper-pagination',
    //       loop: true
    //     })
    //   })
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin';
.link_search {
  left: 0.8rem;
  @include wh(0.9rem, 0.9rem);
  @include ct;
}
.msite_title {
  @include center;
  width: 50%;
  color: #fff;
  text-align: center;
  margin-left: -0.5rem;
  .title_text {
    @include sc(0.8rem, #fff);
    text-align: center;
    display: block;
  }
}
.msite_nav {
  padding-top: 2.1rem;
  background-color: #fff;
  border-bottom: 0.025rem solid $bc;
  height: 10.6rem;
  .swiper-container {
    @include wh(100%, auto);
    padding-bottom: 0.6rem;
  }
  .fl_back {
    @include wh(100%, 100%);
  }
}
.food_types_container {
  display: flex;
  flex-wrap: wrap;
  .link_to_food {
    width: 25%;
    padding: 0.3rem 0rem;
    @include fj(center);
    figure {
      img {
        margin-bottom: 0.3rem;
        @include wh(1.8rem, 1.8rem);
      }
      figcaption {
        text-align: center;
        @include sc(0.55rem, #666);
      }
    }
  }
}
.shop_list_container {
  margin-top: 0.4rem;
  border-top: 0.025rem solid $bc;
  background-color: #fff;
  .shop_header {
    .shop_icon {
      fill: #999;
      margin-left: 0.6rem;
      vertical-align: middle;
      @include wh(0.6rem, 0.6rem);
    }
    .shop_header_title {
      color: #999;
      @include font(0.55rem, 1.6rem);
    }
  }
}
</style>
