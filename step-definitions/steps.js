const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I open the Bing home page$/, async () => {
    await client.url('http://www.bing.com');
    await client.waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, async (title) => {
    await client.assert.title(title);
});