const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

var PRODUCT_DETAIL_URL = '';

Given(/^an item is selected on the Product Search Result Page$/,() => {
  const productSearchResultPage = client.page.productSearchResultPage();
  return productSearchResultPage
    .navigate()
    .waitForElementVisible('@randomProduct')
    .selectProduct();
});

Given(/^I'm in a Product Detail page$/, () => {
  const productDetailPage = client.page.productDetailPage();
  productDetailPage.waitForElementVisible('@pageIdentifier');
  return client.url(function(result){
      PRODUCT_DETAIL_URL = result.value;
  });
});

When(/^I add the product to my wish list$/, () => {
  const productDetailPage = client.page.productDetailPage();
  return productDetailPage.addProductToWishList();
});

Then(/^the product should show up under my Wish List Page$/, () => {
  const wishListPage = client.page.wishListPage();
  return wishListPage
    .navigate()
    .waitForElementVisible('@productList', 5000, function(){
        // Assert number of products shown is only 1
        client.execute(function(){
          return $('.table-product-list > tbody > tr.hproduct').length;
        }, [], function(result){
          var numberOfProductsRendered = result.value;
          wishListPage.assert.equal(numberOfProductsRendered, 1);
        });
    })
    // Aseert if wish listed product is correct
    // by comparing product href to previous product details page visited
    .assert.attributeContains('@productLink', 'href', PRODUCT_DETAIL_URL);
});
