const JasmineConsoleReporter = require('jasmine-console-reporter');
const jaz = jasmine.getEnv();
jaz.clearReporters();
jaz.addReporter(new JasmineConsoleReporter({
  colors: 1,
  cleanStack: 3,
  verbosity: 4,
  listStyle: 'indent',
  timeUnit: 'ms',
  timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
  activity: false,
  emoji: true,
  beep: false
}));
