type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  promotion?: number;
};
interface Cart {
  carts: Product[];
  totalPrice: number;
}

export class ShoppingCart implements Cart {
  carts: Product[];
  totalPrice: number;
  constructor() {
    this.carts = [];
    this.totalPrice = 0;
  }

  clearCart() {
    this.carts = [];
    this.totalPrice = 0;
  }

  getPromotion(promotionList) {
    this.carts = this.carts.map((prd) => {
      const findPromotion = promotionList.find((prm) => prm.id === prd.id);
      const indexPromotion = findPromotion.promotions
        .reverse()
        .find((prm) => prd.quantity >= prm.quantity);
      return {
        ...prd,
        promotion: indexPromotion.percent
      };
    });
  }

  addProduct(product: Product) {
    const isExistedPrd = this.carts.findIndex((prd) => product.id === prd.id);
    return isExistedPrd !== -1
      ? this.carts[isExistedPrd].quantity++
      : this.carts.push(product);
  }

  editProduct(productId: number, quantity: number) {
    const isExistPrd = this.carts.findIndex((prd) => prd.id === productId);
    this.carts = this.carts.map((prd, index) => {
      return isExistPrd === index
        ? {
            ...prd,
            quantity: quantity
          }
        : prd;
    });
  }

  removeProduct(id: number) {
    this.carts = this.carts.filter((prd) => prd.id !== id);
  }

  calculateMoney = (promotionList) => {
    this.getPromotion(promotionList);
    this.totalPrice = this.carts.reduce(
      (init, prd) =>
        init + (prd.quantity * prd.price * (100 - prd.promotion)) / 100,
      0
    );
  };
}
