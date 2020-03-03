const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        // 根据id查询用户信息
        let users = await this.ctx.service.user.getUserById(2);
        this.ctx.body = users;
      }
}

module.exports = HomeController;