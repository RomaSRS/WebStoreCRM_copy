import React from 'react'
import cn from 'classnames'

import styles from './productSelect.module.scss'

interface ISelectionListProps {
    selectionArr: string[];
    selectedItem: string;
    handlerClick: (value: string) => void
    images?: {
        [key: string]: string[];
    }
    className?: string
}

const ProductSelect:React.FC<ISelectionListProps> = ({selectionArr, selectedItem, handlerClick, images, className}) => {

    const selectionStyle = images ? styles.color : styles.size;
    return (
        <ul className={cn(styles.list, className)}>
            {
                selectionArr.map((item, i) => (
                    <li 
                        key={`${item}-${i}`}
                        className={
                            cn(
                                styles.list__item, selectionStyle, {[`${styles.selected}`]: selectedItem === item}
                            )
                        }
                        tabIndex={0}
                        onClick={() => handlerClick(item)} 
                    >
                        {images ? <img src={images[item][0]} alt={item} /> : item}
                    </li>
                ))
            }
        </ul>
    )
}

export default ProductSelect
