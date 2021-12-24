<template>
    <div class="login">
        <!--navbar导航栏-->
        <van-nav-bar class="app-nav-bar"
                     title="登录"
                     left-arrow
                     @click-left="$router.back()" />
        <van-cell-group>
            <van-field v-model="phone"
                       icon-prefix="toutiao"
                       left-icon="shouji"
                       placeholder="请输入手机号" />
            <van-field v-model="code"
                       clearable
                       icon-prefix="toutiao"
                       left-icon="yanzhengma"
                       placeholder="请输入验证码">
                <template #button>
                    <van-button size="small"
                                type="default"
                                round>获取验证码
                    </van-button>
                </template>
            </van-field>
        </van-cell-group>
        <div class="login-warp">
            <van-button class="login-btn"
                        block>登录</van-button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            phone: '',
            code: ''
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