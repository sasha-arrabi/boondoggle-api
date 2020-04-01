import { AppModule } from "../../src/app.module";

describe('app.module', () => {
  let uut: AppModule;

  beforeEach(() => {
    uut = new AppModule();
  });

  it('initializes', () => {
    expect(uut).toBeTruthy();
  });
});
