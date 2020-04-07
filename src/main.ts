import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpServer } from '@nestjs/common';
import * as dotenv from 'dotenv';

// Read environment variables
dotenv.config();

async function bootstrap(): Promise<HttpServer> {
  const port = process.env.PORT; // Read port from deployed environment
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  return app.listen(port);
}

bootstrap();
