const tableName = 'customer'
module.exports = {
  getAllData: (ctx) => {
    return ctx.execSql(`select * from ${tableName}`)
  },
  getCountByCondition: (ctx, postData) => {
    return ctx.execSql(`select count(1) from ${tableName} where username=? and realname=?`, [postData.username, postData.realname])
  }
}