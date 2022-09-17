import {Module} from '@nestjs/common';
import { AppController } from './app.controller';

@Module({ // pass a object when using a Module decorator
    controllers: [AppController]
})
export class AppModule {}