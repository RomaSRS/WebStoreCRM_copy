import React, { useCallback, useEffect, useRef, useState } from 'react'

import styles from './productsBlock.module.scss'

import ProductList from '../ProductList'

import ProductsFilter from '../ProductFilter'
import { data } from 'src/utils/mok.data'



const ProductCount = (windowWith: number): number => {
    switch(true) {
        case  (windowWith < 570):
            return 2
        case  (windowWith < 855):
            return 5
        case  (windowWith <= 1100):
            return 6
        default:
            return 8
    }
}


const ProductsBlock:React.FC = () => {
    const {products, productsFilter} = data

    const [selectedFilter, setSelectedFilter] = useState(productsFilter[0])
    const [isShowAll, setIsShowAll] = useState(false)

    let productCount = useRef(ProductCount(window.innerWidth))

    const resize = useCallback(
        () => {
            productCount.current = ProductCount(window.innerWidth)
        },
        [productCount],
    )
    

    useEffect(() => {
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [resize])
    

    
    return (
        <div className={styles.products}>
            <div className='container'>
                <div className={styles.products__header}>
                    <h2 className={styles.products__title}>Women</h2>
                    <ProductsFilter 
                        productsFilter={productsFilter}
                        selectedFilter={selectedFilter}
                        handleSelect={setSelectedFilter}
                    />
                </div>
               
                <ProductList products={products} isShowAll={isShowAll}/>

                {products.length > productCount.current && <button onClick={() => setIsShowAll(!isShowAll)} className={styles.products__btn}>
                    {isShowAll? 'See Less':'See All'}
                </button>}
            </div>
        </div>
    )
}

export default ProductsBlock
