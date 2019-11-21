<template>
    <div class="side_box">
        <el-menu
            :default-active="$route.meta.A"
            class="el-menu-vertical-demo"
            background-color="orange"
            text-color="#fff"
            active-text-color="skyblue">
            <el-menu-item index="caigou">
                <i class="el-icon-menu"></i>
                <span slot="title">日常采购</span>
            </el-menu-item>
            <el-menu-item index="jinhuo">
                <i class="el-icon-menu"></i>
                <span slot="title">进货</span>
            </el-menu-item>
            <el-menu-item index="tuihuo">
                <i class="el-icon-menu"></i>
                <span slot="title">退货</span>
            </el-menu-item>
        </el-menu>
         <el-menu
            default-active="caigou"
            class="el-menu-vertical-demo"
            background-color="orange"
            text-color="#fff"
            active-text-color="skyblue">
            <el-menu-item index="caigou">
                <i class="el-icon-menu"></i>
                <span slot="title">凭证管理</span>
            </el-menu-item>
            <el-menu-item index="jinhuo">
                <i class="el-icon-menu"></i>
                <span slot="title">专项业务管理</span>
            </el-menu-item>
        </el-menu>
        <div class="content">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/index/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/index/caiwu/guanli'}"><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        created(){
            console.log(this.$route.meta.A)
        }
    }
</script>

<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .side_box{
        position: relative;
        .el-menu-vertical-demo{
            width: 200px;
                .el-menu-item-group{
                    background: rgb(81, 49, 168);
                        .el-menu-item{
                        background-color: rgb(144, 247, 153) !important;
                }
            }
        }
        .content{
            position: absolute;
            left: 220px;
            top: 20px;
            padding: 10px;
            .el-breadcrumb{
                margin-bottom: 10px;
            }
        }
    }
    
</style>