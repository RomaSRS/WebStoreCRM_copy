import React, {useState, useEffect} from 'react'
import ShoppingCartItem from '../shopping-cart-item'
import close from '../../assets/icons/close-icon.svg'
import cn from 'classnames'
import styles from './ShoppingCart.module.scss'

const ShoppingCart: React.FunctionComponent = () => {
    const { shoppingCart, container, title, header, closeModalBtn, cartList,
        totalWrapper, totalPrice, totalText, shoppingCartActions, btnDark,
        btnWhite, btn } = styles

    const mockItems = [
        {id: 242, name: 'Women\'s tracksuit Q109', size: 'S', color: 'Blue', price: 379, amount: 1},
        {id: 243, name: 'lolasdasd', size: 'L', color: 'Blue', price: 25, amount: 1},
        {id: 244, name: 'Keparik', size: 'XL', color: 'Red', price: 57, amount: 1},
        {id: 245, name: 'Shooez', size: 'M', color: 'White', price: 85, amount: 1},
        {id: 246, name: 'Sigareta', size: 'XM', color: 'Black', price: 112, amount: 1}
    ]

    const [total, setTotal] = useState(mockItems.reduce((acc, current) => acc + current.price, 0))

    const [itemsArray, setItemsArray] = useState(mockItems)

    const updateItemAmount = (id: number, action: string) => {
        const newArray = [...itemsArray]
        const index = newArray.findIndex((elem) => elem.id === id)
        
        if (action === 'add') {
            newArray[index].amount++
        } else if(action === 'remove' && newArray[index].amount > 1) {
            newArray[index].amount--
        }
        setItemsArray(newArray)
    }

    useEffect(() => {
        setTotal(() => itemsArray.reduce((acc, current) => acc + current.price * current.amount, 0))
    }, [itemsArray])

    const deleteHandler = (id: number) => {
        const newArray = itemsArray.filter((elem) => elem.id !== id)
        setItemsArray(newArray)
    }

    return (
        <div className={shoppingCart}>
            <header className={header}>
                <div className={container}>
                    <h2 className={title}>shopping cart</h2>
                    <button className={closeModalBtn}>
                        <img src={close} alt="close" />
                    </button>
                </div>
            </header>

            <div className={container}>
                <ul className={cartList}>
                    {itemsArray.map(elem => <ShoppingCartItem key={elem.id} itemEntity={elem} updateItemAmount={updateItemAmount} deleteHandler={deleteHandler}/>)}
                </ul>
            </div>

            <div className={totalWrapper}>
                <div className={container}>
                    <span className={totalText}>Total</span>
                    <span className={totalPrice}>${total}</span>
                </div>
            </div>

            <div className={shoppingCartActions}>
                <div className={container}>
                    <button className={cn(btn, btnDark)}>check out</button>
                    <button className={cn(btn, btnWhite)}>view cart</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart