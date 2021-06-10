const mysql = require('mysql')
export const connection = mysql.createPool({
  host: '218.92.33.35',   // 数据库地址
  user: 'root',    // 数据库用户
  password: 'mysqlonmouse',   // 数据库密码
  database: 'fenxiao'  // 选中数据库
})