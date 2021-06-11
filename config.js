module.exports = {
  //服务器配置
  SERVICE: {
    host: '',
    port: '8589'
  },
  //数据库链接配置
  DATABASE: {
    HOST: '218.92.33.35',
    USER: 'root',
    PASSWORD: 'mysqlonmouse',
    DATABASE: 'fenxiao',
    CONNECTION_LIMIT: 10
  },
  // 接口地址配置
  API: {
    // 项目接口前缀
    PROJECT_INTERFACE_PREFIX: '/api',
    // 后台接口前缀
    ADMIN_INTERFACE_PREFIX: '/adminApi',
    // 移动端接口前缀
    MOBILE_INTERFACE_PREFIX: '/mobileApi'
  },
  // 路径配置
  PATH: {
    UPLOAD_PATH: "public/upload"
  },
  // 限制条件配置
  LIMIT: {
    UPLOAD_IMG_SIZE: 200 * 1024 * 1024
  }
}