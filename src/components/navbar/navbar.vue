<template>
    <div class="navbar">
        <div class="w-1200 nav-box">
            <view class="nav-item">
                <a class="nav-item-a" href="javascript:;">首页</a>
            </view>
            <view class="nav-item">
                <a class="nav-item-a" href="javascript:;">沸点</a>
            </view>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getNavbar } from '@/api/navbar'

onMounted(() => {
    getList()
})

const getList = async () => {
    await getNavbar().then(res => {
        console.log(res)
    })
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    // @include displayFlex($justify-content: flex-start);
    
    .nav-box {
        margin: 0 auto;
        display: flex;
        .nav-item {
            font-size: 14px;
            color: #333;
            line-height: 50px;
            cursor: pointer;
            .nav-item-a {
                position: relative;
                margin: 0 10px;
                color: #333;
                text-decoration: none;
                display: block;
                &:hover {
                    &::after {
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        content: '';
                        height: 2px;
                        border-radius: 10px;
                        background-color: #1890ff;
                    }
                }
            }
        }
    }
}
</style>