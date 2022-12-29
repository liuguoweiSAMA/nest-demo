/*
 * @Author: naiping 1439317032@qq.com
 * @Date: 2022-08-27 14:08:02
 * @LastEditors: naiping 1439317032@qq.com
 * @LastEditTime: 2022-12-28 14:52:05
 * @FilePath: /work/houdun/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DevService } from './dev.service';
import { DbService } from './db.service';
import { HdModule } from './hd/hd.module';
import { ConfigService } from './config.service';

// const hdService = {
//   provide: 'hdService',
//   useClass: process.env.NODE_ENV == 'development' ? DevService : AppService,
// };

@Module({
  imports: [HdModule],
  controllers: [AppController],
  providers: [AppService, ConfigService, DbService],
})
export class AppModule {}
