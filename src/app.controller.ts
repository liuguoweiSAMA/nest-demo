/*
 * @Author: naiping 1439317032@qq.com
 * @Date: 2022-08-27 14:08:02
 * @LastEditors: naiping 1439317032@qq.com
 * @LastEditTime: 2022-12-28 14:49:50
 * @FilePath: /work/houdun/src/app.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './db.service';

@Controller()
export class AppController {
  // private readonly 私有属性 不能修改 只读的
  constructor(
    private readonly appService: AppService,
    private readonly dbService: DbService,
  ) {}
  // constructor(@Inject('hdService') readonly hd,) {}
  @Get()
  getHello(): string {
    return this.appService.get();
  }
}
