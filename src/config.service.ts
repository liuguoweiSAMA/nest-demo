import { developmentConfig } from './config/development.config';
import { productionConfig } from './config/production.config';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });
console.log(process.env.NODE_ENV);
export const ConfigService = {
  provide: 'ConfigService',
  useValue:
    process.env.NODE_ENV == 'development'
      ? developmentConfig
      : productionConfig,
};
