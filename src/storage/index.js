// storage 封装
const STORAGE_KEY = 'mall';
export default {
    serItem(key,value,modele_name){
        if (modele_name) {
            let val = this.getStorage(modele_name);
            val[key] = value;
            this.setItem(modele_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }
        

    },
    getItem(key,modele_name){
        if (modele_name){
            let val = this.getStorage(modele_name);
            if (val) return val[key]
        }
        return this.getStorage()[key];

    },
    getStorage(){
         return JSON.parse(window.sessionStorage.getItem(mall) || '{}');

    },
    clear(key,modele_name){
        let val = this.getStorage();
        if (modele_name){
            delete val[modele_name][key];
        }else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));

    }
}