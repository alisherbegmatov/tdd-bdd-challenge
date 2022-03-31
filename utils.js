// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return 'Hello';
};

const area = (w, h) => {
  // should return the area
  return w * h;
};

const perimeter = (w, h) => {
  // should return the perimeter
  return (w + h) * 2;
};

const circleArea = (r) => {
  // should return the area of the circle
  return Math.PI * r * r;
};

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = [];

const clearCart = () => {
  shoppingCart.length = 0;
};

const createItem = (name, price) => {
  return { name, price, quantity: 1 };
};

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart;
};

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  sumOfItems = 0;
  shoppingCart.forEach((item) => {
    sumOfItems += item.quantity;
  });
  return sumOfItems;
};

const addItemToCart = (item) => {
  // should add item to shopping cart
  const pos = shoppingCart
    .map(function (e) {
      return e.name;
    })
    .indexOf(item.name);
  if (pos === -1) {
    shoppingCart.push(item);
  } else {
    shoppingCart[pos].quantity += 1;
  }
};

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const pos = shoppingCart
    .map(function (e) {
      return e.name;
    })
    .indexOf(item.name);
  if (pos === -1) {
    shoppingCart.push(item);
  } else {
    if (shoppingCart[pos].quantity === 1) {
      shoppingCart.splice(pos, 1);
    } else {
      shoppingCart[pos].quantity -= 1;
    }
  }
};

const getTotalCost = () => {
  // Should return the total cost of all items in the cart
  totalCost = 0;
  shoppingCart.forEach((item) => {
    totalCost += item.price * item.quantity;
  });
  return totalCost;
};

module.exports = {
  sayHello,
  area,
  perimeter,
  circleArea,
  clearCart,
  createItem,
  getShoppingCart,
  addItemToCart,
  getNumItemsInCart,
  removeItemFromCart,
  getTotalCost,
};
