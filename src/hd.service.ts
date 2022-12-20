/*
 * @Author: naiping 1439317032@qq.com
 * @Date: 2022-12-19 18:20:43
 * @LastEditors: naiping 1439317032@qq.com
 * @LastEditTime: 2022-12-19 18:24:12
 * @FilePath: /work/houdun/src/hd.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class HdService {
  hd() {
    return 'hd serviece and';
  }
}
