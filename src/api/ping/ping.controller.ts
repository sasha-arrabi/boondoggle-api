import { Controller, Get } from "@nestjs/common";

@Controller()
export class PingController {

  @Get('/ping')
  public ping() {
    return { message: 'Hello world!' };
  }
}
