
const PAGE_TEXT = {
  header: 'Wish List'
};

module.exports = {
  url: 'https://www.bunnings.com.au/wish-lists/',
  elements: {
    header: '.inside-layout > h1',
    productList: '.table-product-list',
    product: '.table-product-list > tbody > tr',
    productLink: '.hproduct > td:nth-child(2) > a:nth-child(2)'
  },
  PAGE_TEXT: PAGE_TEXT
};
