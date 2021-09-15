import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import styles from './navItem.module.scss'

import NavSubMenu from '../navSubMenu'
import SwiperLinks from '../navSwiperLinks'
import BlockLinks from 'src/components/BlockLinks'


import {ReactComponent as Marker} from './active-marker.svg'
import { ICategory } from 'src/utils/mok.data'




interface INavItemProps {
    path: string
    label: string
    catalog?: ICategory
}
const NavItem:React.FC<INavItemProps> = ({path, label, catalog, children}) => {
    const [showSubMenu, setShowSubMenu] = useState(false)

    const handleEnter = () =>{
        setShowSubMenu(true)
    }
    const handleLeave = () => {
        setShowSubMenu(false)
    }
    
    
    return (
        <li  
            className={styles.menu_item}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <Link  className={styles.menu_link} to={path}>
                {label}
                <Marker className={cn(styles.menu_link__icon, {[`${styles.marker}`]: showSubMenu})}/>
            </Link>
           
            { catalog
                ?
                <NavSubMenu isShow={showSubMenu}>
                    {
                        Object.keys(catalog).map((key) => {
                            let block = catalog[key]
                            if(block.products.length !== 0) {
                                return <SwiperLinks 
                                            key={key}
                                            title={block.title}
                                            products={block.products}
                                        />
                            }
                            return <BlockLinks 
                                        key={key}
                                        title={block.title}
                                        links={block.links}
                                        className={styles.menu_block_links}
                                    />
                        })
                    }
                </NavSubMenu> 
                :
                <NavSubMenu isShow={showSubMenu}>
                    {children}
                </NavSubMenu>
            }
        </li>
    )
}

export default NavItem
