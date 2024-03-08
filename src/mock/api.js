import Mock from 'mockjs'
Mock.mock('/api/user/login',{
    "status":0,
    "data":{
        "id":12,
        "username":"admin",
        "email":"admin@51purse.com",
        "phone":null,
        "role":0,
        "createTime":14454694864,
        "updateTime":15448799797
    }
});