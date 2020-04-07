import { Module } from "@nestjs/common";
import { PingController } from './api/ping/ping.controller';

@Module({
  controllers: [ PingController ]
})
export class AppModule {
  constructor() { }
}
