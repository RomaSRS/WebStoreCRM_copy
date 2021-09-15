import React from 'react'

import cn from 'classnames'
import { Select } from 'antd';

import styles from './productsFilter.module.scss'

import {ReactComponent as ArrowDown} from '../../assets/icons/arrow-down.svg'

const { Option } = Select;

interface IFilterProps {
    productsFilter: string[]
    selectedFilter: string
    handleSelect: (value: string) => void
}

const ProductsFilter:React.FC<IFilterProps> = ({productsFilter, selectedFilter, handleSelect}) => {
    
    return (
        <>
           
            <nav className={styles.nav}>
                {
                    productsFilter.map(filter => (
                        <button 
                            key={filter} 
                            className={cn(styles.item, {[`${styles.selected}`]: selectedFilter === filter})} 
                            onClick={() => handleSelect(filter)}
                        >
                            {filter}
                        </button>
                    ))
                }
            </nav>

            <div className={styles.select}>
                <Select 
                    defaultValue={selectedFilter}  onChange={handleSelect} 
                    bordered={false} style={{width: 200, padding: 0}}
                    tabIndex={0}
                    suffixIcon={<ArrowDown style={{position: 'absolute', right: '15px'}}/>}
                >
                    {
                        productsFilter.map(filter => (
                            <Option key={`option-${filter}`} value={filter}>{filter}</Option>
                        ))
                    }  
                </Select>
            </div>
            
        </>
    )
}

export default ProductsFilter
