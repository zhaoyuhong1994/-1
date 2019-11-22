<template>
    <div class="sbox">
        <el-container>
            <el-header>
                <el-menu
                    :default-active="$route.meta.A"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color=" rgb(81, 49, 168)"
                    text-color="#fff"
                    @select="selecthan"
                    active-text-color="#ffd04b">
                    <el-menu-item index="index">首页</el-menu-item>
                    <el-menu-item index="caigou">采购管理</el-menu-item>
                    <el-menu-item index="caiwu">财务管理</el-menu-item>
                </el-menu>
            </el-header>
            <router-view></router-view>
            <el-footer>
               &copy;腾讯科技版权所有
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        created(){
            console.log(this.$route.meta.A);
        },
        methods:{
            selecthan(v){
                this.$router.push({
                    name : v
                })
            }
        }
    }
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .sbox{
        position: relative;
        .el-header{
            padding: 0;
        }
        .el-footer{
            position: absolute;
            left: 50%;
            margin-left: -80px;
            top: 60px;
            text-align: center;
        }
    }
</style>