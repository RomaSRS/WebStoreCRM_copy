import React, { useEffect, useState } from 'react'


import styles from './search.module.scss'

import { useProducts } from 'src/hooks/useProducts';
import { IProduct } from 'src/typings/product';


import SearchList from '../searchList';
import SearchInput from '../searchInput';
import SearchSelect from '../searchSelect';
import ModalWrapper from '../modal-wrapper';




const SearchModal:React.FC = () => {

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
       <ModalWrapper title='Seach'>
           <SearchSelect handleSelect={handleSelect} categories={categories} selected={selected}/>
            
            <SearchInput handleInput={setSearchTerm}/>

            <hr />
            {!searchTerm ? <h2 className={styles.title}>Need some inspiration?</h2> : null}

            {
                !sortedAndSearchedProducts.length 
                ?
                <div>Товары не найдены!</div>
                :
                <SearchList products={sortedAndSearchedProducts}/>
            }
       </ModalWrapper>
    )
}

export default SearchModal
