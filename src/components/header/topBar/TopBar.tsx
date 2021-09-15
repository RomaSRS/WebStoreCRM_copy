import React from 'react'
import cn from 'classnames'

import styles from './topBar.module.scss'

import {ReactComponent as PhoneIcon} from '../../../assets/icons/phone-call.svg' 
import {ReactComponent as LocalIcon} from '../../../assets/icons/address.svg' 
import {ReactComponent as ClockIcon} from '../../../assets/icons/clock.svg' 
import {ReactComponent as Facebook} from '../../../assets/icons/facebook.svg' 
import {ReactComponent as Twitter} from '../../../assets/icons/twitter.svg' 
import {ReactComponent as Instagram} from '../../../assets/icons/instagram.svg' 
import {ReactComponent as Pinterest} from '../../../assets/icons/pinterest.svg' 
import {ReactComponent as Logo} from './MiSto.svg' 
import { Path } from 'src/utils/path'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className={styles.topBar}>
                <div className='container'>
                   <div className={cn(styles.flex_alin_center, styles.topBar__inner)}>
                       <Link to={Path.HOME} className={styles.logo}>
                            <Logo className={styles.logo__icon}/>
                       </Link>
                        <div className={styles.contacts}>
                            <a className={cn(styles.flex_alin_center, styles.contacts__item)} href="+38 (050) 12 34 567">
                                <PhoneIcon className={styles.contacts__icon}/>
                                +38 (050) 12 34 567</a>
                            <div className={cn(styles.flex_alin_center, styles.contacts__item)}>
                                <LocalIcon className={styles.contacts__icon}/>
                                Ukraine, Kyiv,Khreshchatyk 1
                            </div>
                            <div className={cn(styles.flex_alin_center, styles.contacts__item)}>
                                <ClockIcon className={styles.contacts__icon}/>
                                All week 24/7
                            </div>
                        </div>

                        <div className={cn(styles.flex_alin_center, styles.social)}>
                            <a 
                                href="https://www.facebook.com" className={cn(styles.flex_alin_center, styles.social__link)} 
                                target="_black" rel="noreferrer" title='facebook'
                            >
                                <Facebook className={styles.social__icon}/>
                            </a>
                            <a 
                                href="https://twitter.com" className={cn(styles.flex_alin_center, styles.social__link)}  
                                target="_black" rel="noreferrer" title="twitter"
                            >
                                <Twitter className={styles.social__icon}/>
                            </a>
                            <a 
                                href="https://https://www.instagram.com" className={cn(styles.flex_alin_center, styles.social__link)} 
                                target="_black" rel="noreferrer" title="instagram"
                            >
                                <Instagram className={styles.social__icon}/>
                            </a>
                            <a 
                                href="https://www.pinterest.com/" className={cn(styles.flex_alin_center, styles.social__link)}  
                                target="_black" rel="noreferrer" title="pinterest"
                            >
                                <Pinterest className={styles.social__icon}/>
                            </a>
                        </div>
                   </div>
                </div>
            </div>
    )
}

export default TopBar
