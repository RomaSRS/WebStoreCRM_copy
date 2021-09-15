import React from 'react'
import { slide as Menu } from 'react-burger-menu'

import './BurgerMenu.scss'

const BurgerMenu: React.FunctionComponent = (props: any) => {

    return (
        <div className='burgerMenu'>
            <Menu >
                {props.children}
            </Menu>
        </div> 
    )
}

export default BurgerMenu
