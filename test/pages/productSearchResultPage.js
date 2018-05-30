
var selectRandomProduct = {
  selectProduct: function() {
    return this.waitForElementVisible('@randomProduct', 3000)
      .click('@randomProduct')
      .waitForElementNotPresent('@randomProduct',5000, false);
  }
};

module.exports ={
  url: 'https://www.bunnings.com.au/search/products?q=paint&redirectFrom=Any',
  commands: [selectRandomProduct],
  elements: {
    randomProduct: '.product-list-group.paged-items > section:nth-child(1) > article:nth-child(1)',
  }
};
