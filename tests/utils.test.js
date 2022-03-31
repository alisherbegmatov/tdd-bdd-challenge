const mocha = require('mocha');
const chai = require('chai');
const utils = require('../utils');
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it('should say hello', function () {
  const hello = utils.sayHello();
  expect(hello).to.be.a('string');
  expect(hello).to.equal('Hello');
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it('should return the area', function () {
  const area = utils.area(4, 5);
  expect(area).to.be.a('number');
  expect(area).to.equal(20);
});

it('should return the perimeter', function () {
  const perimeter = utils.perimeter(4, 5);
  expect(perimeter).to.be.a('number');
  expect(perimeter).to.equal(18);
});

it('should return the area of the circle', function () {
  const circleArea = utils.circleArea(4);
  expect(circleArea).to.be.a('number');
  expect(circleArea).to.equal(Math.PI * 16);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart();
  done();
});

it('Should create a new (object) Item with name and price', function () {
  const item = utils.createItem('apple', 0.99);
  expect(item).to.be.a('object');
  expect(item).to.have.property('name', 'apple');
  expect(item).to.have.property('price', 0.99);
  expect(item).to.have.property('quantity', 1);
});

it('Should return the number of items in the cart', function () {
  const item = utils.createItem('apple', 0.99);
  utils.addItemToCart(item);
  let numOfItems = utils.getNumItemsInCart();
  expect(numOfItems).to.be.a('number');
  expect(numOfItems).to.equal(1);
  const item2 = utils.createItem('Banana', 0.99);
  utils.addItemToCart(item);
  utils.addItemToCart(item2);
  numOfItems = utils.getNumItemsInCart();
  expect(numOfItems).to.equal(3);
});

it('Should return an array containing all items in cart', function () {
  const item = utils.createItem('apple', 0.99);
  utils.addItemToCart(item);
  const shoppingCart = utils.getShoppingCart();
  expect(shoppingCart).to.be.a('Array');
  expect(shoppingCart).with.lengthOf(1);
});

it('Should add a new item to the shopping cart', function () {
  const item = utils.createItem('apple', 0.99);
  utils.addItemToCart(item);
  const shoppingCart = utils.getShoppingCart();
  const appleInCard = shoppingCart
    .map(function (e) {
      return e.name;
    })
    .indexOf('apple');
  expect(appleInCard).to.equal(0);
});

it('Should remove items from cart', function () {
  const item = utils.createItem('apple', 0.99);
  utils.addItemToCart(item);
  utils.removeItemFromCart(item);
  const shoppingCart = utils.getShoppingCart();
  const appleInCard = shoppingCart
    .map(function (e) {
      return e.name;
    })
    .indexOf('apple');
  expect(appleInCard).to.equal(-1);
});

// ========================================================
// Stretch Challenges
// ========================================================

it('Should update the count of items in the cart', function () {
  const item = utils.createItem('apple', 0.99);
  utils.addItemToCart(item);
  const numOfItemsBeforeRemove = utils.getNumItemsInCart();
  utils.removeItemFromCart(item);
  const numOfItemsAfterRemove = utils.getNumItemsInCart();
  expect(numOfItemsAfterRemove).to.equal(numOfItemsBeforeRemove - 1);
  const numOfItemsBeforeAdd = utils.getNumItemsInCart();
  utils.addItemToCart(item);
  const numOfItemsAfterAdd = utils.getNumItemsInCart();
  expect(numOfItemsAfterAdd).to.equal(numOfItemsBeforeAdd + 1);
});

it('Should validate that an empty cart has 0 items', function () {
  const item = utils.createItem('apple', 0.99);
  utils.addItemToCart(item);
  utils.clearCart();
  const numOfItem = utils.getNumItemsInCart();
  expect(numOfItem).to.be.a('number');
  expect(numOfItem).to.equal(0);
});

it('Should return the total cost of all items in the cart', function () {
  const item = utils.createItem('apple', 0.99);
  const item2 = utils.createItem('banana', 1.29);
  utils.addItemToCart(item);
  utils.addItemToCart(item2);
  utils.addItemToCart(item);
  const totalCost = utils.getTotalCost();
  expect(totalCost).to.be.a('number');
  expect(totalCost).to.equal(3.27);
});
