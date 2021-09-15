import React from 'react'
// import { NavLink} from 'react-router-dom'

import styles from './cookies.module.scss'

import {ReactComponent as Share} from '../../assets/icons/share.svg'

const Cookies = () => {
    // const pathNames = useLocation().pathname.split('/')
    const pathNames = ['', 'women', 'Women\'s tracksuit Q109', '']

    return (
        <div className={styles.wrap}>
            <div className='container'>
                <div className={styles.cookies}>
                    <div>
                        <a className={styles.link} href='*'>home</a>
                       {pathNames.map(pathName => {
                           if(pathName) {
                               return <a 
                                        key={pathName} 
                                        className={styles.link} 
                                        href='*'
                                        >{pathName}</a>
                           }
                           return null
                       })}
                    </div>
                    <button className={styles.btn}>
                        <Share className={styles.btn__icon}/>
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cookies
