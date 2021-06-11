const mysql = require('mysql')
const path = require('path')
const config = require('../config')
const db = config.DATABASE

const pool = mysql.createPool({
  host: db.HOST,
  user: db.USER,
  password: db.PASSWORD,
  database: db.DATABASE,
  connectionLimit: db.CONNECTION_LIMIT
})

const utils = {
  //数据库查询方法
  query: (sql, values) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            connection.release()
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
          })
        }
      })
    })
  },
  //错误JSON
  resultErrorJson: (code = -1, message = '请求失败', data = {}) => {
    return {
      data: data,
      code: code,
      message: message
    }
  },
  //成功JSON
  resultSuccessJson: (code = 0, message = '请求成功', data = {}) => {
    return {
      data: data,
      code: code,
      message: message
    }
  },
  // 切割文件后缀名
  splitFileName: (text) => {
    let index = text.lastIndexOf(".");
    return {
      name: text.substring(0, index),
      suffix: text.substring(index + 1)
    };
  },
  // 递归创建目录
  mkdirsSync: (dirname) => {
    if (fs.existsSync(dirname)) {
      return true;
    } else {
      if (utils.mkdirsSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname);
        return true;
      }
    }
  }
}

module.exports = utils