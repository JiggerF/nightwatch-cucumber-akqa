@wishList
Feature: Wish List
As a consumer
I want to add products to my wish list page
In order to purchase them at a later point in time

Background:
  Given an item is selected on the Product Search Result Page

Scenario: Adding product to Wish List Page
  Given I'm in a Product Detail page
  When I add the product to my wish list
  Then the product should show up under my Wish List Page
