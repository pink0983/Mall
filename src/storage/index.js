// storage 封装
const STORAGE_KEY = 'mall';
export default {
    // 存储值
    serItem(key,value,module_name){
        if (module_name) {
            let val = this.getStorage(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }
        

    },
    // 获取某一模块下面的属性
    getItem(key,module_name){
        if (module_name){
            let val = this.getStorage(module_name);
            if (val) return val[key]
        }
        return this.getStorage()[key];

    },
    // 获取整个数据
    getStorage(){
        // api
         return JSON.parse(window.sessionStorage.getItem(mall) || '{}');

    },
    // 清空某个值
    clear(key,module_name){
        let val = this.getStorage();
        if (module_name){
            if (!val[module_name])return;
            delete val[module_name][key];
        }else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));

    }
}