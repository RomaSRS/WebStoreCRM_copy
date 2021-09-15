import React from 'react'
import styles from './loginPage.module.scss'

import Login from 'src/components/login'

const LoginPage = () => {
    return (
        <div className={styles.page}>
            <Login/>
        </div>
    )
}

export default LoginPage
