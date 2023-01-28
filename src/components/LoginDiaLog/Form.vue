<template>
    <a-form class="m-t20" ref="formRef" :model="formState" :rules="rules" @finish="submitFinish">
        <!-- 短信验证码登录 -->
        <div class="form-item-box" v-if="tabIndex == '1'">
            <a-form-item name="username">
                <a-input placeholder="手机号" v-model:value="formState.username" autocomplete="off">
                    <template #prefix>
                        <span class="p-r8 form-country">中国 +86</span>
                        <span class="p-r8 form-icon">
                            <UpOutlined />
                            <DownOutlined />
                        </span>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item class="m-t20" name="code">
                <a-input placeholder="输入验证码" v-model:value="formState.code" autocomplete="off">
                    <template #suffix>
                        <span class="form-code">获取短信验证码</span>
                    </template>
                </a-input>
            </a-form-item>
        </div>
        <!-- 密码登录 -->
        <div class="form-item-box" v-else>
            <a-form-item name="username">
                <a-input placeholder="手机号或邮箱" v-model:value="formState.username" autocomplete="off"></a-input>
            </a-form-item>
            <a-form-item class="m-t20" name="password">
                <a-input type="password" visibilityToggle placeholder="输入验证码" autocomplete="off" v-model:value="formState.password">
                    <template #suffix>
                        <EyeOutlined v-if="false" class="pass-icon" />
                        <EyeInvisibleOutlined v-else class="pass-icon" />
                    </template>
                </a-input>
            </a-form-item>
        </div>
        <div class="form-other" @click="handleLogin">
            <div></div>
            <div>忘记密码</div>
        </div>
        <a-button class="form-login-btn m-t20" type="primary" html-type="submit">
            {{ tabIndex == '1' ? '登录/注册' : '登录' }}
        </a-button>
    </a-form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { login } from '@/api/user'
import { home_view } from '@/common/path'
 
const formState = reactive({
    username: '',
    password: '',
    code: ''
})

const props = defineProps({
    tabIndex: {
        type: String,
        default: '1'
    }
})

const router = useRouter()

// 用户名验证
const validateUserName = async(rule, value) => {
    if (value === '') {
        return Promise.reject('请输入手机号/邮箱')
    }
    return Promise.resolve()
}
// 验证码验证
const validateUserCode = async (rule, value) => {
    if (value === '') {
        return Promise.reject('请输入验证码')
    }
    return Promise.resolve()
}
// 密码验证
const validateUserPwd = async(rule, value) => {
    if (value === '') {
        return Promise.reject('请输入密码')
    }
    return Promise.resolve()
}

const rules = {
    username: [{validator: validateUserName, trigger: 'change'}],
    code: [{validator: validateUserCode, trigger: 'change'}],
    password: [{validator: validateUserPwd, trigger: 'change'}]
}

const submitFinish = async (event) => {
    console.log(formState)
    const data = { username: formState.username, password: formState.password }
    await login(data).then(res => {
        router.replace(home_view)
    })
}
// const handleLogin = async (event) => {
//     const data = { username: 'admin', password: '123456' }
//     await login(data).then(res => {
//         console.log('请求的接口结果：', res)
//     })
    
// }
</script>

<style lang="scss" scoped>
.form-item-box {
    min-height: 105px;
}
.form-country, .form-code {
    font-size: 14px;
    color: #8590a6;
    cursor: pointer;
}
.pass-icon {
    font-size: 18px;
    color: #8590a6;
}
.form-icon {
    font-size: 10px;
    color: #8590a6;
    @include displayFlex(center, center, column);
}
.form-other {
    font-size: 12px;
    line-height: 30px;
    color: #1890ff;
    cursor: pointer;
    @include displayFlex(center, space-between);
}
.form-login-btn {
    width: 100%;
}
:deep(.ant-tabs-nav::before) {
    border-bottom: none; // 1px solid #f0f0f0
}
:deep(.ant-input) {
    line-height: 30px;
}
:deep(.ant-input-affix-wrapper, .ant-input-affix-wrapper:focus),
:deep(.ant-input, .ant-input:focus),
:deep(.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus),
:deep(.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper.disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused) {
    border: none;
    border-bottom: 1px solid #d9d9d9;
    box-shadow: none;
}
:deep(.ant-input-affix-wrapper),
:deep(.ant-input) {
    padding: 4px 0;
}
:deep(.ant-btn) {
    padding: 0;
}
</style>