import React from 'react'

import styles from './searchList.module.scss'

import { IProduct } from 'src/typings/product'

interface ISearchListProps {
    products: IProduct[]
}
const SearchList:React.FC<ISearchListProps> = ({products}) => {
    return (
        <ul className={styles.list}>
            {
                products.map(product => (
                    <li className={styles.item} key={product.title}>
                        <div className={styles.item__image}>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className={styles.item__info}>
                            <p className={styles.item__name}>{product.title}</p>
                            <p className={styles.item__price}>${product.price}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default SearchList
