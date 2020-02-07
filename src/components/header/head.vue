<template>
  <header id="head_top">
    <slot name="logo"></slot>
    <slot name="search"></slot
    ><!--？？-->
    <div class="head_login">
      <span class="login_span">登录|注册</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Head'
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
