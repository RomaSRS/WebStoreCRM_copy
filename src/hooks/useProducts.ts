import {useMemo} from "react";
import { IProduct } from "src/typings/product";


export const useSortedProducts = (products: IProduct[], sort: string) => {
    const sortedProducts = useMemo(() => {
        if(sort === 'All Categories') {
            return products
        } else {
            return products.filter(product => product.category === sort)
        }
    }, [sort, products])

    return sortedProducts;
}

export const useProducts = (products: IProduct[], sort: string, query: string) => {
    const sortedProducts = useSortedProducts(products, sort);

    const sortedAndSearchedProducts = useMemo(() => {
        return sortedProducts.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedProducts])

    return sortedAndSearchedProducts;
}
