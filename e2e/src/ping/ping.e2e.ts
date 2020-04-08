import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../src/app.module';
import { PingController } from '../../../src/api/ping/ping.controller';

describe('Ping', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ PingController ]
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET ping`, (done) => {
    return request(app.getHttpServer())
      .get('/ping')
      .expect(200)
      .expect({
        message: 'Hello world!',
      }, done);
  });

  afterAll(async () => {
    await app.close();
  });
});
