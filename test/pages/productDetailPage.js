
const addProductCommand = {
  addProductToWishList : function() {
    return this.waitForElementVisible('@wishListButton', 3000)
      .click('@wishListButton')
      .waitForElementVisible('@wishListButtonProdAddedLabel');
  }
}


module.exports = {
  elements: {
    pageIdentifier: '.product-details',
    wishListButton: '.btn-add-wishlist',
    wishListButtonProdAddedLabel: '.btn-add-wishlist.added'
  },
  commands: [addProductCommand]

};
