import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import tovar from '../../assets/images/cart-item.png'
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'
import trash from '../../assets/icons/trash.svg'
import styles from './ShoppingCartItem.module.scss'

type itemEntity = {
    id: number;
    name: string;
    size: string;
    color: string;
    price: number;
    amount: number;
}

type propsType = {
    itemEntity: itemEntity,
    updateItemAmount: (x: number, y: string) => void,
    deleteHandler: (x: number) => void
}

const ShoppingCartItem: React.FunctionComponent<propsType> = ({ itemEntity, updateItemAmount, deleteHandler }) => {
    const { shoppingCartItem, cartImg, info, header,
        itemName, actions, pridumat, kolichestvo, price, itemInfo, btn,
        btnMinus, btnPlus, fill, btnTrash } = styles

    const [totalPrice, setTotalPrice] = useState(itemEntity.price)

    const minusHandler = () => {
        updateItemAmount(itemEntity.id, 'remove')
    }

    const plusHandler = () => {
        updateItemAmount(itemEntity.id, 'add')
    }

    useEffect(() => {
        setTotalPrice(itemEntity.price * itemEntity.amount)
    }, [itemEntity.amount])

    return (
        <li className={shoppingCartItem}>
            <img className={cartImg} src={tovar} />
            <div className={info}>
                <div className={header}>
                    <span className={itemName}>{itemEntity.name}</span>
                    <span className={itemInfo}>{itemEntity.color}, {itemEntity.size}</span>
                </div>
                <div className={actions}>
                    <div className={pridumat}>
                        <button onClick={minusHandler} className={cn(btn, btnMinus)}><img src={minus} alt="minus" /></button>
                        <span className={kolichestvo}>{itemEntity.amount}</span>
                        <button onClick={plusHandler} className={cn(btn, btnPlus)}><img className={fill} src={plus} alt="plus" /></button>
                    </div>
                    <span className={price}>${totalPrice}</span>
                    <button onClick={() => deleteHandler(itemEntity.id)} className={cn(btn, btnTrash)}><img src={trash} alt="trash" /></button>
                </div>
            </div>
        </li>
    )
}

export default ShoppingCartItem