import { PersistentUnorderedMap } from "near-sdk-as";


export const products = new PersistentUnorderedMap<string, string>("PRODUCTS");




export function setProduct(id: string, productName: string): void {
    products.set(id, productName);
}

export function getProduct(id: string): string | null {
    return products.get(id);
}

