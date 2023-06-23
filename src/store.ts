import { RefObject } from "react";
import { create } from "zustand";

type ProductsType = {
   residentialRef?: RefObject<HTMLElement>;
   commercialRef?: RefObject<HTMLElement>;
   adaptersRef?: RefObject<HTMLElement>;
   evChargingRef?: RefObject<HTMLElement>;
   evAccessoriesRef?: RefObject<HTMLElement>;
   shopMenu: boolean;
   homeMenu: boolean;
   showHideCart: boolean;
   cartItemsNo: number;
};

type StoreType = {
   productsRef: ProductsType;
   setResidentialRef: (ref: RefObject<HTMLElement>) => void;
   setCommercialRef: (ref: RefObject<HTMLElement>) => void;
   setAdapterRef: (ref: RefObject<HTMLElement>) => void;
   setEVCRef: (ref: RefObject<HTMLElement>) => void;
   setEVARef: (ref: RefObject<HTMLElement>) => void;
   setShopMenu: (menu: boolean) => void;
   setHomeMenu: (menu: boolean) => void;
   setShowHideCart: (status: boolean) => void;
   setCartItemsNo: (no: number) => void;
};

const useAppStore = create<StoreType>(set => ({
   productsRef: {
      shopMenu: false,
      homeMenu: false,
      showHideCart: false,
      cartItemsNo: 1
   },
   setResidentialRef: residentialRef =>
      set(store => ({ productsRef: { ...store.productsRef, residentialRef } })),
   setCommercialRef: commercialRef =>
      set(store => ({ productsRef: { ...store.productsRef, commercialRef } })),
   setAdapterRef: adaptersRef =>
      set(store => ({ productsRef: { ...store.productsRef, adaptersRef } })),
   setEVCRef: evChargingRef =>
      set(store => ({ productsRef: { ...store.productsRef, evChargingRef } })),
   setEVARef: evAccessoriesRef =>
      set(store => ({ productsRef: { ...store.productsRef, evAccessoriesRef } })),
   setShopMenu: shopMenu => set(store => ({ productsRef: { ...store.productsRef, shopMenu } })),
   setHomeMenu: homeMenu => set(store => ({ productsRef: { ...store.productsRef, homeMenu } })),
   setShowHideCart: showHideCart =>
      set(store => ({ productsRef: { ...store.productsRef, showHideCart } })),
   setCartItemsNo: cartItemsNo =>
      set(store => ({ productsRef: { ...store.productsRef, cartItemsNo } }))
}));

export default useAppStore;
