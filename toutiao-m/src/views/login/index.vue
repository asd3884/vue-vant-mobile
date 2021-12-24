<template>
    <div class="login">
        <!--navbar导航栏-->
        <van-nav-bar class="app-nav-bar"
                     title="登录"
                     left-arrow
                     @click-left="$router.back()" />
        <!--
      基于 Vant 的表单验证
      1、使用 van-form 组件包裹所有的表单项 van-field
      2、给 van-form 绑定 submit 事件，当表单提交的时候会触发 submit 事件
         提示：只有表单验证通过时，它才会调用 submit 事件
      3、使用 Field 的 rules 属性定义校验规则
     -->
        <van-form show-error="false"
                  :show-error-message="false"
                  @submit="onLogin"
                  @failed="onFailed">
            <van-field v-model="mobile"
                       icon-prefix="toutiao"
                       left-icon="shouji"
                       :rules="formRules.mobile"
                       placeholder="请输入手机号" />
            <van-field v-model="code"
                       clearable
                       icon-prefix="toutiao"
                       left-icon="yanzhengma"
                       :rules="formRules.code"
                       placeholder="请输入验证码">
                <template #button>
                    <van-button size="small"
                                type="default"
                                round>获取验证码
                    </van-button>
                </template>
            </van-field>

            <div class="login-warp">
                <van-button class="login-btn"
                            block>
                    登录</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { login } from '@/api/user'
import { Toast } from 'vant';
export default {
    data() {
        return {
            mobile: '',
            code: '',
            //校验规则
            formRules: {
                mobile: [
                    { required: true, message: '请输入手机号' },
                    { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
                ],
                code: [
                    { required: true, message: '请输入验证码' },
                    { pattern: /^\d{6}$/, message: '验证码格式错误' }
                ]
            }
        }
    },
    methods: {
        async onLogin() {
            // console.log("登录")
            Toast.loading({
                message: '登录中...',
                forbidClick: true,
                duration: 0//展示时长(ms)，值为 0 时，toast 不会消失
            })
            try {
                const { data } = await login(this.mobile, this.code)
                console.log(data)
                Toast.success("登录成功")
            } catch (err) {
                console.log(err)
                Toast.fail("登录失败,手机号或验证码错误")
            }

        },

        //提交表单且验证不通过后触发
        onFailed(err) {
            // console.log(err)
            if (err.errors[0]) {
                Toast({
                    message: err.errors[0].message,
                    position: 'top',
                });
            }


        }
    }

}
</script>

<style scope lang="less">
.login {
    .van-cell:nth-child(1) {
        border-bottom: 1px solid #ededed;
    }
    .van-button--small {
        background-color: #ededed;
    }
    .login-warp {
        padding: 26px 16px;
        .login-btn {
            font-size: 16px;
            color: #fff;
            background-color: #6db4fb;
            border-radius: 5px;
        }
    }
}
</style>