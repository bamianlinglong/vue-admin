<template>
    <div class="login-mask"></div>
    <div class="login-form">
        <div class="">5656565</div>
        <div>
            <a-tabs class="tab-pane" v-model:activeKey="activeKey">
                <a-tab-pane key="1" tab="验证码登录"></a-tab-pane>
                <a-tab-pane key="2" tab="密码登录"></a-tab-pane>
            </a-tabs>
            <Form :key="activeKey" :tabIndex="activeKey" />
            <div>
                <a-divider><span class="login-way">其他登录方式</span></a-divider>
                <div class="login-way-img">
                    <img src="@/assets/icon/wechat.png" />
                    <img src="@/assets/icon/QQ.png" />
                    <img src="@/assets/icon/weibo.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const activeKey = ref('1')
</script>

<style lang="scss" scoped>
.login-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
}
.login-form {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 720px;
    height: 450px;
    background-color: #fff;
    padding: 28px;
    @include displayFlex(flex-start, space-between);
    .tab-pane {
        width: 400px;
    }
    .login-way {
        font-size: 12px;
        color: #8590a6;
    }
    .login-way-img {
        cursor: pointer;
        @include displayFlex(center, space-around);
    }
}

</style>