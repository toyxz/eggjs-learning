'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserById(id) {
    // 根据id查询用户信息
    return await this.app.mysql.get('users', {id: id});
  }
}
module.exports = UserService;