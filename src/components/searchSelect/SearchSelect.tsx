import React, { useState } from 'react'
import { Select } from 'antd'

import styles from './styles.module.scss'
import {ReactComponent as ArrowDown} from '../../assets/icons/arrow-down.svg'

const { Option } = Select;

interface ISearchSelect {
    categories: string[]
    selected: string
    handleSelect: (value: string) => void
}
const SearchSelect:React.FC<ISearchSelect> = ({categories, selected, handleSelect}) => {

    const [bgColor, setBgColor] = useState('#f8f8f8')

    const handleEnter = () => {
        setBgColor('#e6e6e6')   
    }
    const handleLeave = () => {
        setBgColor('#f8f8f8')
    }
    return (
        <Select 
            tabIndex={0}
            suffixIcon={<ArrowDown style={{position: 'absolute', right: '15px'}}/>}
            defaultValue={selected}  
            onChange={handleSelect} 
            bordered={false} 
            style={{width: '100%', padding: '8px 15px', backgroundColor: `${bgColor}`}}
            onFocus={handleEnter}
            onBlur={handleLeave}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            >
                <Option className={styles.option} value="All Categories">All Categories</Option>
            {
                categories.map(category => (
                    <Option className={styles.option} key={`option-${category}`} value={category}>{category}</Option>
                ))
            }  
        </Select>
    )
}

export default SearchSelect
