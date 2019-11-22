<template>
    <div>
        <h1>汽车采购进货</h1>
        <b>颜色：</b>
        <el-checkbox-group v-model="color">
            <el-checkbox v-for="(item,index) in colorarr" :label='item' :key="index">
            </el-checkbox>
        </el-checkbox-group>
        <b>品牌：</b>
        <el-checkbox-group v-model="brand">
            <el-checkbox v-for="(item,index) in brandarr" :label='item' :key="index">
            </el-checkbox>
        </el-checkbox-group>
        <b>排放：</b>
        <el-checkbox-group v-model="exhaust">
            <el-checkbox v-for="(item,index) in exhaustarr" :label='item' :key="index">
            </el-checkbox>
        </el-checkbox-group>
        <el-table
            :data="arr"
            >
            <el-table-column
                label="图片"
                prop='img'
                width="200">
                <div slot-scope="s">
                    <el-image 
                        style="width: 100px"
                        :src="`http://aiqianduan.com:7897/images/carimages_small/${s.row.id}/view/${s.row.img}`"
                        :preview-src-list="srcList"
                         alt="">
                    </el-image>
                </div>
            </el-table-column>
            <el-table-column
                label="id"
                prop="id">
            </el-table-column>
            <el-table-column
                label="品牌"
                prop="brand">
            </el-table-column>
            <el-table-column
                label="车系"
                prop="series">
            </el-table-column>
            <el-table-column
                label="价格"
                prop="price">
            </el-table-column>
            <el-table-column
                label="颜色"
                prop="color">
            </el-table-column>
            <el-table-column
                label="排放"
                prop="exhaust">
            </el-table-column>
            <el-table-column
                label="发动机"
                prop="engine">
            </el-table-column>
        </el-table>
        <br>
         <el-pagination
            layout="prev, pager, next, jumper"
            :total="total"
            :currentpage="page"
            background
            @current-change="changepagehan">
        </el-pagination>
    </div>
</template>

<script>
    import http from '../../http/http';
    export default {
        data() {
            return {
                arr:[],
                colorarr: ['红','蓝','黑','灰','白'],
                color: [],
                brandarr: ['大众','宝马','奔驰','丰田','本田','奥迪','雪佛兰'],
                brand: [],
                exhaustarr: ['国二','国三','国四','国五','国六'],
                exhaust: [],
                page:1,
                total:1,
                srcList: [
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574359500717&di=d74b32fd4cb9a2d7475f75a83f03f987&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2F20171123%2F6357-fypceip9879905.png',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574359500717&di=d74b32fd4cb9a2d7475f75a83f03f987&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2F20171123%2F6357-fypceip9879905.png'
                ]
            }
        },
        created(){
            this.loadData();
        },
        methods:{
            loadData(){
                http.get('getCar',{ color:this.color,brand:this.brand,exhaust:this.exhaust,page: this.page },(data)=>{
                    this.arr = data.data.results;
                    this.total = data.data.total;
                })
            },
            changepagehan(currentpage){
                this.page = currentpage;
                this.loadData();
            }
        },
        watch:{
            color(v){
                this.color = v;
                this.page = 1;
                this.loadData();
            },
            brand(v){
                this.brand = v;
                this.page = 1;
                this.loadData();
            },
            exhaust(v){
                this.exhaust = v;
                this.page = 1;
                this.loadData();
            }
        }
    }
</script>

<style lang="less" scoped>
    h1{
        margin-bottom: 20px;
    }
    b{
        font-size: 14px;
        color: rgb(77, 75, 75);
    }
    .el-checkbox-group{
        margin-bottom: 10px;
    }
</style>