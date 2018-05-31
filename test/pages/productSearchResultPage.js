const TEST_APP = require('../test-environment').TEST_APP;
const TEST_URL_PATH = '/search/products?q=paint&redirectFrom=Any'

var selectRandomProduct = {
  selectProduct: function() {
    return this.waitForElementVisible('@randomProduct', 3000)
      .click('@randomProduct')
      .waitForElementNotPresent('@randomProduct',5000, false);
  }
};

module.exports ={
  url: TEST_APP + TEST_URL_PATH,
  commands: [selectRandomProduct],
  elements: {
    randomProduct: '.product-list-group.paged-items > section:nth-child(1) > article:nth-child(1)',
  }
};
