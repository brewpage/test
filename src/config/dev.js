let baseConfig = require('./base');

let config = {
    appEnv: 'dev',
    server:''  //服务器地址
};

module.exports = Object.freeze(Object.assign({}, baseConfig, config)); //导出不可变对象



