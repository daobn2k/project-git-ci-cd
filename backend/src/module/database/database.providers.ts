import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

const config = new ConfigService();
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => mongoose.connect(config.get('URL_MONGO_DB')),
  },
];
