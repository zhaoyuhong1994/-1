<template>
    <div class="side_box">
        <el-menu
            :default-active="A"
            class="el-menu-vertical-demo"
            background-color="orange"
            text-color="#fff"
            active-text-color="skyblue"
            @select="selecthan"
            v-show="A=='caigou'">
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
            :default-active="B"
            class="el-menu-vertical-demo"
            background-color="orange"
            text-color="#fff"
            active-text-color="skyblue"
            @select="selecthan"
            v-show="A=='caiwu'">
            <el-menu-item index="pingzheng">
                <i class="el-icon-menu"></i>
                <span slot="title">凭证管理</span>
            </el-menu-item>
            <el-menu-item index="zhuanxiangyewu">
                <i class="el-icon-menu"></i>
                <span slot="title">专项业务管理</span>
            </el-menu-item>
        </el-menu>
        <div class="content">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <router-link class="biaoji" :to="{ path: '/index/index' }">首页</router-link>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <router-link :to="{ name: A }" class="biaoji">
                        {{A_chinse}}
                    </router-link>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <router-link :to="{ name: B }" class="biaoji" >
                        {{B_chinese}}
                    </router-link>
                </el-breadcrumb-item>
            </el-breadcrumb>
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        computed:{
            A(){
                return this.$route.meta.A;
            },
            B(){
                return this.$route.meta.B;
            },
            A_chinse(){
                if(this.A=='caiwu'){
                    return '财务';
                }else if(this.A == 'caigou'){
                    return '采购';
                }
            },
            B_chinese(){
                if(this.B == 'jinhuo') {
                    return '进货管理';
                }else if(this.B == 'richang') {
                    return '日常管理';
                }else if(this.B == 'tuihuo') {
                    return '退货管理';
                }else if(this.B == 'pingzheng') {
                    return '凭证管理';
                }else if(this.B == 'zhuanxiangyewu') {
                    return '专项业务管理';
                }
            }
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

<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .side_box{
        position: relative;
        .el-menu-vertical-demo{
            width: 200px;
        }
        .content{
            position: absolute;
            left: 220px;
            top: 20px;
            padding: 10px;
            .el-breadcrumb{
                margin-bottom: 10px;
            }
            .biaoji{
                font-weight: bold !important;
                cursor: pointer !important;
            }
        }
    }
    
</style>