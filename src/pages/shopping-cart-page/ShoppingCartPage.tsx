import React, { useState } from 'react'
import cn from 'classnames'
import { useEffect } from 'react'
import ShoppingCartItem from '../../components/shopping-cart-item'
import styles from './ShoppingCartPage.module.scss'

const ShoppingCartPage = () => {
    const { ShoppingCartPage, title, totalWrapper, totalText, totalPrice, itemList,
        btn, btnDark } = styles

    const mockItems = [
        { id: 242, name: 'Women\'s tracksuit Q109', size: 'S', color: 'Blue', price: 379, amount: 1 },
        { id: 243, name: 'lolasdasd', size: 'L', color: 'Blue', price: 25.50, amount: 1 },
        { id: 244, name: 'Keparik', size: 'XL', color: 'Red', price: 57.99, amount: 1 },
        { id: 245, name: 'Shooez', size: 'M', color: 'White', price: 85, amount: 1 },
        { id: 246, name: 'Sigareta', size: 'XM', color: 'Black', price: 112, amount: 1 }
    ]

    const [total, setTotal] = useState(mockItems.reduce((acc, current) => acc + current.price * current.amount, 0))

    const [itemsArray, setItemsArray] = useState(mockItems)

    const updateItemAmount = (id: number, action: string) => {
        const newArray = [...itemsArray]
        const index = newArray.findIndex((elem) => elem.id === id)

        if (action === 'add') {
            newArray[index].amount++
        } else if (action === 'remove' && newArray[index].amount > 1) {
            newArray[index].amount--
        }
        setItemsArray(newArray)
    }

    const deleteHandler = (id: number) => {
        const newArray = itemsArray.filter((elem) => elem.id !== id)
        setItemsArray(newArray)
    }

    useEffect(() => {
        setTotal(() => itemsArray.reduce((acc, current) => acc + current.price * current.amount, 0))
    }, [itemsArray])

    return (
        <div className={'container'}>
            <div className={ShoppingCartPage}>
                <h2 className={title}>Shopping Cart</h2>
                <ul className={itemList}>
                    {itemsArray.map(elem => <ShoppingCartItem key={elem.id} itemEntity={elem} updateItemAmount={updateItemAmount} deleteHandler={deleteHandler} />)}
                </ul>
                <div className={totalWrapper}>
                    <span className={totalText}>Total</span>
                    <span className={totalPrice}>${total}</span>
                </div>
                <button className={cn(btn, btnDark)}>check out</button>
            </div>
        </div>
    )
}

export default ShoppingCartPage