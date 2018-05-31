const TEST_APP = require('../test-environment').TEST_APP;
const TEST_URL_PATH = '/wish-lists/';

const PAGE_TEXT = {
  header: 'Wish List'
};

module.exports = {
  url: TEST_APP + TEST_URL_PATH,
  elements: {
    header: '.inside-layout > h1',
    productList: '.table-product-list',
    product: '.table-product-list > tbody > tr',
    productLink: '.hproduct > td:nth-child(2) > a:nth-child(2)'
  },
  PAGE_TEXT: PAGE_TEXT
};
