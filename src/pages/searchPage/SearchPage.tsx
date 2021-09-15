import React, { useEffect, useState } from 'react'
import cn from 'classnames'

import { useProducts } from 'src/hooks/useProducts'
import { IProduct } from 'src/typings/product'

import styles from './searchPage.module.scss'

import SearchInput from 'src/components/searchInput'
import SearchList from 'src/components/searchList'
import SearchSelect from 'src/components/searchSelect'


const SearchPage = () => {

    const [categories, setCategories] = useState<string[]>([])
    const [products, setProducts] = useState<IProduct[]>([])
    const [selected, setSelected] = useState('All Categories')
    const [searchTerm, setSearchTerm] = useState('');
    const sortedAndSearchedProducts = useProducts(products, selected, searchTerm)

    const handleSelect = (value: string): void => {
        setSelected(value)
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[])
    
    return (
        <div className='container'>
            <div className={styles.page}>
                <div className={styles.header}>
                    <div className={styles.header__selectWrap}>
                        <SearchSelect handleSelect={handleSelect} categories={categories} selected={selected} />
                    </div>

                    <SearchInput handleInput={setSearchTerm} stylesClass={styles.header__search}/>
                </div>

                <hr />

                {!searchTerm ? <h2 className={cn(styles.title, styles.modal__title)}>Need some inspiration?</h2> : null}

                {
                    !sortedAndSearchedProducts.length 
                    ?
                    <div>Товары не найдены!</div>
                    :
                    <SearchList products={sortedAndSearchedProducts}/>
                }
            </div>
        </div>
    )
}

export default SearchPage
