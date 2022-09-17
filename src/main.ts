import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// Create an async function, normally using 'bootstrap'
async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
}

bootstrap() // Call the bootstrap function