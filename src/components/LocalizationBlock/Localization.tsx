import React, { useState } from 'react';

import Modal from 'react-modal';
import LocalizationItem from './LocalizationItem';
import close from '../../assets/icons/close-icon.svg';
import styles from './Localization.module.scss';

import "animate.css"


Modal.setAppElement('#root');

const LocalizationBlock: React.FC = () => {

  const language = [
    {text: "English"},
    {text: "Українська"},
    {text: "Français"},
    {text: "Deutsche"},
    {text: "Español"},
    {text: "Polskie"},
    {text: "Türkçe"},
    {text: "한국어"},
  ];

  const currency = [
    {text: "USD ( US Dollar )"},
    {text: "UAH ( Ukraine Hryvnia )"},
    {text: "EUR ( Euro )"},
    {text: "PLN ( Polish Zloty )"},
    {text: "TRY ( Turkish Lira )"},
    {text: "KRW ( Korean Won )"},
  ];

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className={styles.localBlock}>
          <div className={styles.localBlock_header}>
            <h2 className={styles.localBlock_header__text}>localization</h2>
            <button onClick={closeModal} className={styles.localBlock_header__btn}>
              <img src={close} alt="close" />
            </button>
          </div>
          <div className={styles.localBlock_list}>
            <h3 className={styles.localBlock_list__title}>language</h3>
            {language.map(item => <LocalizationItem itemTypes={item}/>)}
          </div>
          <div className={styles.localBlock_list}>
            <h3 className={styles.localBlock_list__title}>currency</h3>
            {currency.map(item => <LocalizationItem itemTypes={item}/>)}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default LocalizationBlock;
