import React, { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MenuActionLinks } from 'src/utils/constants'

import styles from './navActions.module.scss'


const NavActions = () => {
    let windowWith = useRef(window.innerWidth)

    const resize = useCallback(
        () => {
            windowWith.current = window.innerWidth
        },
        [windowWith],
    )
    
    useEffect(() => {
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [resize])

    return (
        <div className={styles.actions}>
            {   windowWith.current >= 768 
                ?
                MenuActionLinks.map(link => (
                    
                    <Link key={link.path} to={link.path} className={styles.actions__item}>
                        <img src={link.icon} alt={link.path} />
                        {
                            link.label === 'cart'
                            ?
                            <div className={styles.amount}>
                                <span>3</span>
                            </div>
                            :
                            null
                        }

                    </Link>
                ))
                :
                MenuActionLinks.map(link => (
                    <button onClick={() => console.log(link.label)} 
                        key={link.path} className={styles.actions__item}
                    >
                        <img src={link.icon} alt={link.path} />
                        {
                            link.label === 'cart'
                            ?
                            <div className={styles.amount}>
                                <span>4</span>
                            </div>
                            :
                            null
                        }
                    </button>
                ))
            }

            
        </div>
    )
}

export default NavActions
