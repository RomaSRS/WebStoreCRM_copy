import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import styles from './navBar.module.scss'

import NavItem from '../navItem'

import logo from '../../../assets/images/logo.png'

import { MainMenuLinks } from 'src/utils/constants'

import { Path } from 'src/utils/path'
import NavActions from '../navActions'
import BurgerMenu from '../navbBurger-menu'
import { Categories, ICategory } from 'src/utils/mok.data'



const NavBar = () => {
   
   const {aboutUs, woman, men, beaty, accessories, blog, cotacts} = MainMenuLinks;
   const womanCatalog:ICategory = Categories.women
   
   
    return (
        <div className={styles.navBar}>
            <div className='container'>
                <div className={cn(styles.flex_alin_center, styles.navBar__inner)}>
                    <BurgerMenu>
                        {Object.keys(MainMenuLinks).map(key => {
                            const link = MainMenuLinks[key]
                            
                            return (
                                <Link key={key} to={link.path}>{link.label}</Link>
                            )
                        })}
                    </BurgerMenu>
                    <Link to={Path.HOME}>
                        <img className={styles.logo} src={logo} alt="logo" />
                    </Link>

                    <nav className={styles.nav}>
                        <ul className={cn(styles.flex_alin_center, styles.navMenu)}>
                            <NavItem path={aboutUs.path} label={aboutUs.label}>
                                <p>{aboutUs.label}</p>
                            </NavItem>
                            <NavItem path={woman.path} label={woman.label} catalog={womanCatalog}/>
                            <NavItem path={men.path} label={men.label}>
                                <p>{men.label}</p>
                            </NavItem>
                            <NavItem path={beaty.path} label={beaty.label}>
                                <p>{beaty.label}</p>
                            </NavItem>
                            <NavItem path={accessories.path} label={accessories.label}>
                                <p>{accessories.label}</p>
                            </NavItem>
                            <NavItem path={blog.path} label={blog.label}>
                                <p>{blog.label}</p>
                            </NavItem>
                            <NavItem path={cotacts.path} label={cotacts.label}>
                                <p>{cotacts.label}</p>
                            </NavItem>
                        </ul>
                    </nav>

                    <NavActions/>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar
