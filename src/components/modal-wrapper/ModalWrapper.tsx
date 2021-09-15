import React from 'react'

import styles from './modalWrapper.module.scss'

import close from '../../assets/icons/close-icon.svg';

interface IModalProps {
    title: string
}
const ModalWrapper:React.FC<IModalProps> = ({title, children}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__header}>
                <h2 className={styles.modal__title}>{title}</h2>
                <button  className={styles.modal__btn}>
                    <img src={close} alt="close" />
                </button>
            </div>
            <div className={styles.modal__container}>
                {children}
            </div>
        </div>
    )
}

export default ModalWrapper
