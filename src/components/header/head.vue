<template>
  <header id="head_top">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <go-back></go-back>
    </section>
    <router-link
      :to="this.userInfo ? '/profile' : '/login'"
      class="head_login"
      v-if="signinUp"
    >
      <svg class="user_avatar" v-if="userInfo">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#user"
        ></use>
      </svg>
      <span class="login_span" v-else>登录|注册</span>
    </router-link>
    <section class="title_head ellipsis" v-if="headTitle">
      <span class="title_text">{{ headTitle }}</span>
    </section>
    <slot name="changecity"></slot>
  </header>
</template>

<script>
import GoBack from '@/components/svg/goback.vue'
import { mapState } from 'vuex'
export default {
  name: 'Head',
  props: { signinUp: String, headTitle: String, goBack: String },

  components: {
    GoBack
  },
  mounted() {
    this.$store.dispatch('getUserInfo')
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixin';

#head_top {
  background-color: $blue;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  @include wh(100%, 1.95rem);
}
.head_goback {
  left: 0.4rem;
  @include wh(0.6rem, 1rem);
  line-height: 2.2rem;
  margin-left: 0.4rem;
}
.head_login {
  right: 0.55rem;
  @include sc(0.65rem, #fff);
  @include ct;
  .login_span {
    color: #fff;
  }
  .user_avatar {
    fill: #fff;
    @include wh(0.8rem, 0.8rem);
  }
}
.title_head {
  @include center;
  width: 50%;
  color: #fff;
  text-align: center;
  .title_text {
    @include sc(0.8rem, #fff);
    text-align: center;
    font-weight: bold;
  }
}
</style>
