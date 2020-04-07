import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpServer } from '@nestjs/common';

async function bootstrap(): Promise<HttpServer> {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  return await app.listen(3000);
}

bootstrap();
