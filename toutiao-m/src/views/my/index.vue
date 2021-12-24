<template>
    <div class="my-warp">
        <!---->
        <van-cell-group class="base-info">
            <!--用户信息-->
            <van-cell class="user-info"
                      :border="false"
                      center>
                <van-image class="avate"
                           slot="icon"
                           round
                           fit="cover"
                           src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                <div class="name"
                     slot="title">黑马头条号</div>
                <van-button size="mini"
                            round>编辑资料</van-button>
            </van-cell>

            <van-grid :border="false">
                <van-grid-item class="grid-item">
                    <span class="item-icon"
                          slot="icon">8</span>
                    <span class="item-text"
                          slot="text"> 头条</span>
                </van-grid-item>
                <van-grid-item class="grid-item">
                    <span slot="icon"
                          class="item-icon">8</span>
                    <span slot="text"
                          class="item-text">关注</span>
                </van-grid-item>
                <van-grid-item class="grid-item">
                    <span slot="icon"
                          class="item-icon">8</span>
                    <span slot="text"
                          class="item-text">粉丝</span>
                </van-grid-item>
                <van-grid-item class="grid-item">
                    <span slot="icon"
                          class="item-icon">8</span>
                    <span slot="text"
                          class="item-text">获赞</span>
                </van-grid-item>
            </van-grid>
        </van-cell-group>

        <!--收藏/历史-->
        <van-grid :column-num="2">
            <van-grid-item class="grid-icon">
                <van-icon slot="icon"
                          class-prefix="toutiao"
                          name="shoucang"></van-icon>
                <div class="toutiao-text"
                     slot="text">收藏</div>
            </van-grid-item>
            <van-grid-item class="grid-icon">
                <van-icon slot="icon"
                          class-prefix="toutiao"
                          name="lishi"></van-icon>
                <div class="toutiao-text"
                     slot="text">历史</div>
            </van-grid-item>
        </van-grid>

        <!--路由导航栏-->
        <div class="link-warp">
            <van-cell title="消息通知"
                      is-link
                      to="index" />
            <van-cell title="小智同学"
                      is-link
                      to="index" />
            <van-cell class="loginout-warp">
                <div class="loginout">退出登录</div>
            </van-cell>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scope lang="less">
.my-warp {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f7f9;
    //登录状态
    .base-info {
        background: url('./banner.png') no-repeat;
        background-size: cover;
        .van-cell {
            background: unset;
        }
        .van-grid-item__content {
            background: unset;
        }

        .user-info {
            padding-top: 38px;
            .avate {
                width: 65px;
                height: 65px;
                margin-right: 12px;
                border: 1px solid #fff;
            }
            .name {
                font-size: 15px;
                color: #fff;
            }
        }

        .grid-item {
            color: #fff;
            font-size: 14px;
            .item-icon {
                font-size: 20px;
            }
            .item-text {
                font-size: 14px;
            }
        }
    }

    .grid-icon {
        .toutiao-text {
            font-size: 14px;
        }
        .toutiao-shoucang {
            color: #eb5253;
            font-size: 22px;
        }
        .toutiao-lishi {
            color: #ff9d1d;
            font-size: 22px;
        }
    }

    .link-warp {
        padding-top: 5px;
        .loginout-warp {
            margin-top: 5px;
            padding-bottom: 5px;
            .loginout {
                text-align: center;
                color: #d86262;
            }
        }
    }
}
</style>