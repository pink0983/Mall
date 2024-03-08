// storage 封装
const STORAGE_KEY = 'mall';
export default {
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
    getItem(key,module_name){
        if (module_name){
            let val = this.getStorage(module_name);
            if (val) return val[key]
        }
        return this.getStorage()[key];

    },
    getStorage(){
         return JSON.parse(window.sessionStorage.getItem(mall) || '{}');

    },
    clear(key,module_name){
        console.log(this);
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