import { Selectors } from "../../types"
import { Product } from "./types"

export const productGetAllSelector = (s: any): Selectors<Product[]> => s.products.getall
export const productGetOneSelector = (s: any): Selectors<Product[]> => s.products.getone
export const productDeleteOneSelector = (s: any): Selectors<string> => s.products.deleteone