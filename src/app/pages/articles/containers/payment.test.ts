import { ShoppingCart } from './payment';

// const currentCart = [
const apple = { id: 1, name: 'apple', quantity: 1, price: 30 };
const mango = { id: 2, name: 'mango', quantity: 1, price: 75 };
const rambutan = { id: 3, name: 'rambutan', quantity: 1, price: 25 };

const promotionList = [
  {
    id: 1,
    name: 'apple',
    promotions: [
      {
        quantity: 1,
        percent: 1
      },
      {
        quantity: 2,
        percent: 4
      },
      {
        quantity: 3,
        percent: 8
      }
    ]
  },
  {
    id: 2,
    name: 'mango',
    promotions: [
      {
        quantity: 1,
        percent: 2
      },
      {
        quantity: 2,
        percent: 3
      },
      {
        quantity: 3,
        percent: 4
      }
    ]
  },
  {
    id: 3,
    name: 'rambutan',
    promotions: [
      {
        quantity: 1,
        percent: 1
      },
      {
        quantity: 3,
        percent: 2
      },
      {
        quantity: 5,
        percent: 3
      }
    ]
  }
];

describe('calculate money', () => {
  const shoppingCarts = new ShoppingCart();
  beforeAll(() => {
    shoppingCarts.clearCart();
  });
  describe('add product', () => {
    it('add new product', () => {
      const prd = { id: 1, name: 'cherry', quantity: 1, price: 20 };
      shoppingCarts.addProduct(prd);
      expect(shoppingCarts.carts).toContain(prd);
    });
    it('add exist product', () => {
      const prd = { id: 1, name: 'cherry', quantity: 1, price: 20 };
      // const prd = { id: 3, name: 'rambutan', quantity: 1 };
      shoppingCarts.addProduct(prd);
      expect(shoppingCarts.carts).toContainEqual({
        id: 1,
        name: 'cherry',
        quantity: 2,
        price: 20
      });
    });
  });
  describe('edit product', () => {
    it('edit exist prd', () => {
      shoppingCarts.editProduct(1, 30);
      expect(shoppingCarts.carts).toContainEqual({
        id: 1,
        name: 'cherry',
        quantity: 30,
        price: 20
      });
    });
    it('edit not exist prd', () => {
      const unExistedPrd = { id: 100, name: 'Avocado', quantity: 100 };
      shoppingCarts.editProduct(100, 100);
      expect(shoppingCarts.carts).not.toMatchObject(unExistedPrd);
    });
  });
  it('remove prd', () => {
    shoppingCarts.addProduct(rambutan);
    shoppingCarts.addProduct(rambutan);
    shoppingCarts.removeProduct(3);
    expect(shoppingCarts.carts).not.toContainEqual(rambutan);
  });
  describe('total money', () => {
    beforeAll(() => {
      shoppingCarts.clearCart();
    });
    it('calculate money', () => {
      shoppingCarts.addProduct(apple);
      shoppingCarts.addProduct(apple);
      shoppingCarts.addProduct(mango);
      shoppingCarts.addProduct(rambutan);
      shoppingCarts.addProduct(rambutan);
      shoppingCarts.addProduct(rambutan);
      const total =
        (apple.quantity * apple.price * 96) / 100 +
        (mango.quantity * mango.price * 98) / 100 +
        (rambutan.quantity * rambutan.price * 98) / 100;
      shoppingCarts.calculateMoney(promotionList);
      expect(shoppingCarts.totalPrice).toEqual(total);
    });
  });
});
