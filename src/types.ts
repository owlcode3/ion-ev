export type ProductDetails = {
   names: [string, string];
   price: string;
   Img: string;
   altName: string;
}[];

export type CheckoutStage = "cart" | "info" | "payment" | "summary";
