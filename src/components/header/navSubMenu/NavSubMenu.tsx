import React, { ReactNode } from 'react'

import './navSubMenu.scss'

interface INavSubMenuProps {
    // showSubMenuClass: string
    isShow: boolean
    children: ReactNode
}
const NavSubMenu: React.FC<INavSubMenuProps> = ({isShow, children}) => {
    if (!isShow) {
        return null
    }
   
    return (
        
        <div className={`subMenu`}>
            <div className='container'>
                <ul className='subMenu__inner'>
                    {children}
                </ul>
            </div>
        </div>
        
    )
}

export default NavSubMenu
