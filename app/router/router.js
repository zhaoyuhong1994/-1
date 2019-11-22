import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/index',
            name:'index',  
            component: () => import('../layouts/Index.vue'),
            children: [
                {
                    path: 'index',
                    name:'index',
                    component: () => import('../views/Index.vue'),
                    meta:{
                        'A':'index',
                        'B':'index'
                    }
                },
                {
                    path: 'caigou',
                    name:'caigou',  
                    component: () => import('../layouts/Side.vue'),
                    redirect:{
                        'name':'richang'
                    },
                    children: [
                        {
                            path: 'jinhuo',
                            name: 'jinhuo',
                            component: () => import('../views/cg-jinhuo/jinhuo.vue'),
                            meta:{
                                'A':'caigou',
                                'B':'jinhuo'
                            }
                        },
                        {
                            path: 'richang',
                            name: 'richang',
                            component: () => import('../views/cg-richang/richang.vue'),
                            meta:{
                                'A':'caigou',
                                'B':'richang'
                            }
                        },
                        {
                            path: 'tuihuo',
                            name: 'tuihuo',
                            component: () => import('../views/cg-tuihuo/tuihuo.vue'),
                            meta:{
                                'A':'caigou',
                                'B':'tuihuo'
                            }
                        }
                    ]
                },
                {
                    path: 'caiwu',
                    name: 'caiwu',  
                    component: () => import('../layouts/Side.vue'),
                    meta:{
                        'A':'caiwu',
                        'B':'caiwu'
                    },
                    redirect:{
                        'name':'pingzheng'
                    },
                    children: [
                        {
                            path: 'pingzheng',
                            name: 'pingzheng',
                            component: () => import('../views/cw-pingzheng/pingzheng.vue'),
                            meta:{
                                'A':'caiwu',
                                'B':'pingzheng'
                            }
                        },
                        {
                            path: 'zhuanxiangyewu',
                            name: 'zhuanxiangyewu',
                            component: () => import('../views/cw-guanli/guanli.vue'),
                            meta:{
                                'A':'caiwu',
                                'B':'zhuanxiangyewu'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});

export default router;