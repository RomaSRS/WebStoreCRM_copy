import React from 'react'
import cn from 'classnames'

import styles from './productActions.module.scss'

import {ReactComponent as Like} from '../../assets/icons/like.svg';
import {ReactComponent as Compare} from '../../assets/icons/compare.svg';

interface IActionsProps {
    className?: string
    handlerAdd: () => void
    handlerLike: () => void
    handlerCompare: () => void
}
const ProductActions:React.FC<IActionsProps> = ({className, handlerAdd, handlerLike, handlerCompare}) => {
    return (
        <div className={cn(styles.actions, className)}>
            <button onClick={handlerAdd} className={styles.actions__btn}>Add To Cart</button>
            <span onClick={handlerLike} className={styles.actions__item} tabIndex={0}>
                <Like className={styles.actions__icon}/>
            </span>
            <span onClick={handlerCompare} className={styles.actions__item} tabIndex={0}>
                <Compare className={styles.actions__icon}/>
            </span>
        </div>
    )
}

export default ProductActions
