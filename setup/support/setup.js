const { setDefaultTimeout, AfterAll, BeforeAll } = require('cucumber');
const { createSession, closeSession } = require('nightwatch-api');

setDefaultTimeout(60000);

BeforeAll(async () => {
  await createSession({ env: 'default' });
});

AfterAll(async () => {
  await closeSession();
});