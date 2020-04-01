import { Module } from "@nestjs/common";

@Module({})
export class AppModule {
  constructor() {
    console.log('I am created');
  }
}
