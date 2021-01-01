'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi egg';
  }

  // 用户登录
  async login() {
    const resLogin = await this.service.login.findUser();
    if (resLogin) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = { data: '登录成功', openId: openId, username: resLogin.username };

    } else {
      this.ctx.body = { data: '登录失败' };
    }

  }

  // 用户注册
  async register() {
    const resLogin = await this.service.login.saveUser();
    if (resLogin) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = { data: '注册成功', openId: openId, username: resLogin.username };

    } else {
      this.ctx.body = { data: '注册失败' };
    }

  }
}

module.exports = HomeController;
