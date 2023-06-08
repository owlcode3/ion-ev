import { RefObject } from "react";
import { create } from "zustand";

type ProductsType = {
   residentialRef?: RefObject<HTMLElement>;
   commercialRef?: RefObject<HTMLElement>;
   adaptersRef?: RefObject<HTMLElement>;
   evChargingRef?: RefObject<HTMLElement>;
   evAccessoriesRef?: RefObject<HTMLElement>;
   menu?: boolean;
};

type StoreType = {
   productsRef: ProductsType;
   setResidentialRef: (ref: RefObject<HTMLElement>) => void;
   setCommercialRef: (ref: RefObject<HTMLElement>) => void;
   setAdapterRef: (ref: RefObject<HTMLElement>) => void;
   setEVCRef: (ref: RefObject<HTMLElement>) => void;
   setEVARef: (ref: RefObject<HTMLElement>) => void;
   setMenu: (menu: boolean) => void;
};

const useAppStore = create<StoreType>(set => ({
   productsRef: {
      menu: false
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
   setMenu: menu => set(store => ({ productsRef: { ...store.productsRef, menu } }))
}));

export default useAppStore;
