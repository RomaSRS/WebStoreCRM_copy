import React from 'react'
import cn from 'classnames'

import styles from './productList.module.scss'

import ProductItem from '../ProductItem'

import { IProduct } from 'src/typings/product'


interface IListProps {
    products: IProduct[]
    isShowAll: boolean
}
const ProductList:React.FC<IListProps> = ({products, isShowAll}) => {
    return (
        <ul className={cn(styles.list, {[`${styles.showAll}`]: isShowAll})}>
            {
                products.map((product) => (
                    <li key={product.id} className={styles.list__item}>
                        <ProductItem product={product}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProductList
