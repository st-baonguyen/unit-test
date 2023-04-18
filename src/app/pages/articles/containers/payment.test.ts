import {
  addProduct,
  editProduct,
  removeProduct,
  getAllQuantity,
  getPromotion,
  calculateMoney
} from './payment';

const currentCart = [
  { id: 1, name: 'apple', quantity: 4, price: 10 },
  { id: 2, name: 'mango', quantity: 21, price: 8 },
  { id: 3, name: 'rambutan', quantity: 50, price: 2 }
];

const promotionList = [
  {
    id: 1,
    name: 'apple',
    promotions: [
      {
        quantity: 3,
        promotion: 1
      },
      {
        quantity: 5,
        promotion: 4
      },
      {
        quantity: 10,
        promotion: 8
      }
    ]
  },
  {
    id: 2,
    name: 'mango',
    promotions: [
      {
        quantity: 10,
        promotion: 2
      },
      {
        quantity: 20,
        promotion: 3
      },
      {
        quantity: 30,
        promotion: 5
      }
    ]
  },
  {
    id: 3,
    name: 'rambutan',
    promotions: [
      {
        quantity: 15,
        promotion: 4
      },
      {
        quantity: 35,
        promotion: 7
      },
      {
        quantity: 45,
        promotion: 10
      }
    ]
  }
];

jest.mock('./payment', () => {
  const originalModule = jest.requireActual('./payment');
  return {
    __esModule: true,
    ...originalModule
  };
});

describe('calculate money', () => {
  describe('add product', () => {
    it('add new product', () => {
      const prd = { id: 4, name: 'cherry', quantity: 2, price: 20 };
      expect(addProduct(currentCart, prd)).toStrictEqual([
        { id: 1, name: 'apple', quantity: 4, price: 10 },
        { id: 2, name: 'mango', quantity: 21, price: 8 },
        { id: 3, name: 'rambutan', quantity: 50, price: 2 },
        { id: 4, name: 'cherry', quantity: 2, price: 20 }
      ]);
    });
    it('add new product in empty arr', () => {
      const prd = { id: 4, name: 'cherry', quantity: 2, price: 20 };
      expect(addProduct([], prd)).toStrictEqual([
        { id: 4, name: 'cherry', quantity: 2, price: 20 }
      ]);
    });
    it('add exist product', () => {
      const prd = { id: 3, name: 'rambutan', quantity: 1 };
      expect(addProduct(currentCart, prd)).toStrictEqual([
        { id: 1, name: 'apple', quantity: 4, price: 10 },
        { id: 2, name: 'mango', quantity: 21, price: 8 },
        { id: 3, name: 'rambutan', quantity: 51, price: 2 }
      ]);
    });
  });
  describe('edit product', () => {
    it('edit exist prd', () => {
      const prd = { id: 3, name: '', quantity: 30 };
      expect(editProduct(currentCart, prd)).toStrictEqual([
        { id: 1, name: 'apple', quantity: 4, price: 10 },
        { id: 2, name: 'mango', quantity: 21, price: 8 },
        { id: 3, name: 'rambutan', quantity: 30, price: 2 }
      ]);
    });
    it('edit not exist prd', () => {
      const prd = { id: 4, name: '', quantity: 30 };
      expect(editProduct(currentCart, prd)).toStrictEqual([
        { id: 1, name: 'apple', quantity: 4, price: 10 },
        { id: 2, name: 'mango', quantity: 21, price: 8 },
        { id: 3, name: 'rambutan', quantity: 50, price: 2 }
      ]);
    });
  });
  it('remove prd', () => {
    expect(removeProduct(currentCart, 2)).toStrictEqual([
      { id: 1, name: 'apple', quantity: 4, price: 10 },
      { id: 3, name: 'rambutan', quantity: 50, price: 2 }
    ]);
  });
  it('get promotion', () => {
    expect(getPromotion(currentCart, promotionList)).toStrictEqual([
      { id: 1, name: 'apple', quantity: 4, price: 10, promotion: 1 },
      { id: 2, name: 'mango', quantity: 21, price: 8, promotion: 3 },
      { id: 3, name: 'rambutan', quantity: 50, price: 2, promotion: 10 }
    ]);
  });
  it('calculate money', () => {
    const total =
      4 * 10 * (99 / 100) + 21 * 8 * (97 / 100) + 50 * 2 * (90 / 100);
    expect(calculateMoney(currentCart, promotionList)).toEqual(total);
  });
});
