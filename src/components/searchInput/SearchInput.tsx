import React from 'react'
import cn from 'classnames'

import styles from './searchInput.module.scss'

import {ReactComponent as SearchIcon} from '../../assets/icons/lupa.svg'

interface ISearchInputProps {
    handleInput: (value: string) => void
    stylesClass?: string
}
const SearchInput:React.FC<ISearchInputProps> = ({handleInput, stylesClass}) => {
   
    return (
        <div className={cn(styles.search, stylesClass)}>
            <input 
                className={styles.search__input} type="search" 
                aria-label="Search" placeholder='What are you Looking for?'
                onChange={(e) => handleInput(e.target.value)}
            />
            <SearchIcon style={{margin: '0 5px'}}/>
        </div>
    )
}

export default SearchInput
