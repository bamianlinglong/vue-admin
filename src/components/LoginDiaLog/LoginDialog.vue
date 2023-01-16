<template>
    <div class="login-mask"></div>
    <div class="login-form">
        <div class="">5656565</div>
        <div>
            <a-tabs class="tab-pane" v-model:activeKey="activeKey">
                <a-tab-pane key="1" tab="验证码登录"></a-tab-pane>
                <a-tab-pane key="2" tab="密码登录"></a-tab-pane>
            </a-tabs>
            <!-- 短信验证码登录 -->
            <a-form class="m-t20" ref="formRef" :model="formState" v-if="activeKey == 1">
                <a-form-item>
                    <a-input placeholder="手机号">
                        <template #prefix>
                            <span class="p-r8 form-country">中国 +86</span>
                            <span class="p-r8 form-icon">
                                <UpOutlined />
                                <DownOutlined />
                            </span>
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item class="m-t20">
                    <a-input placeholder="输入验证码">
                        <template #suffix>
                            <a-button type="primary">获取短信验证码</a-button>
                        </template>
                    </a-input>
                </a-form-item>
            </a-form>
            <!-- 密码登录 -->
            <a-form class="m-t20" ref="formRef" :model="formState" v-else>
                <a-form-item>
                    <a-input placeholder="手机号或邮箱"></a-input>
                </a-form-item>
                <a-form-item class="m-t20">
                    <a-input type="password" visibilityToggle placeholder="输入验证码">
                        <template #suffix>
                            <EyeOutlined v-if="false" class="pass-icon" />
                            <EyeInvisibleOutlined v-else class="pass-icon" />
                        </template>
                    </a-input>
                </a-form-item>
            </a-form>
            <div class="form-other">
                <div>忘记密码</div>
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
    .form-country {
        color: #8590a6;
    }
    .form-icon {
        font-size: 10px;
        color: #8590a6;
        @include displayFlex(center, center, column);
    }
    .pass-icon {
        font-size: 18px;
        color: #8590a6;
    }
    .form-other {
        font-size: 12px;
        line-height: 30px;
        color: #1890ff;
        cursor: pointer;
        @include displayFlex(center, space-between);
    }
}
:deep(.ant-tabs-nav::before) {
    border-bottom: none; // 1px solid #f0f0f0
}
:deep(.ant-input) {
    line-height: 30px;
}
:deep(.ant-input-affix-wrapper, .ant-input-affix-wrapper:focus),
:deep(.ant-input, .ant-input:focus) {
    border: none;
    border-bottom: 1px solid #d9d9d9;
    box-shadow: none;
}
</style>