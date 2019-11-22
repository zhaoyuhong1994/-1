import axios from 'axios';
import querystring from 'querystring';

const instance = axios.create({
    baseURL:'http://127.0.0.1:3000/',
    timeout:20000
});

const get = {
    getCar(params,callback){
        instance.get('http://www.aiqianduan.com:7897/cars?'+querystring.stringify({
            'color':params.color.join('v'),
            'brand':params.brand.join('v'),
            'exhaust':params.exhaust.join('v'),
            'page':params.page
        })).then(data => callback(data));   
    }
};

export default{
    get(fnName,params,callback) {
        get[fnName](params,callback);
    },
    post(fnName,params,callback) {
        get[fnName](params,callback);
    }
}