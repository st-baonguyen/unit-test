export const addProduct = (cart, product) => {
  const isExistedPrd = cart.findIndex((prd) => product.id === prd.id);
  if (isExistedPrd !== -1) {
    return cart.map((prdCart, index) => {
      return index === isExistedPrd
        ? {
            ...prdCart,
            quantity: prdCart.quantity + 1
          }
        : prdCart;
    });
  }
  return [...cart, product];
};

export const editProduct = (cart, product) => {
  const isExistPrd = cart.findIndex((prd) => product.id === prd.id);
  return cart.map((prd, index) => {
    return isExistPrd === index
      ? {
          ...prd,
          quantity: product.quantity
        }
      : prd;
  });
};

export const removeProduct = (cart, id) => {
  return cart.filter((prd) => prd.id !== id);
};

export const getPromotion = (cart, promotionList) => {
  return cart.map((prd) => {
    const findPromotion = promotionList.find((prm) => prm.id === prd.id);
    const indexPromotion = findPromotion.promotions
      .reverse()
      .find((prm) => prd.quantity >= prm.quantity);
    return {
      ...prd,
      promotion: indexPromotion.promotion
    };
  });
};

export const getAllQuantity = (cart) => {
  //
};

export const calculateMoney = (cart, promotionList) => {
  return getPromotion(cart, promotionList).reduce(
    (init, prd) =>
      init + (prd.quantity * prd.price * (100 - prd.promotion)) / 100,
    0
  );
};
