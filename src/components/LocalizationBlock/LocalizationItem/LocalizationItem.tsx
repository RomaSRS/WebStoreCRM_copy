import React from 'react'

import styles from './Item.module.scss'

interface ILocalizationBlock {
  text: string;
}

type LocalizationItemType = {
  itemTypes: ILocalizationBlock;
}

const LocalizationItem: React.FC<LocalizationItemType> = ({itemTypes}) => {

  const { text } = itemTypes;

  return (
    <>
      <label className={styles.localBlock_list__label}>
        <input type="radio" className={styles.localBlock_list__input} name="name" />
        <span className={styles.localBlock_list__text}>{text}</span>
      </label>
    </>
  )
}

export default LocalizationItem;
