import styles from './SubscribeBlock.module.scss';
import OfferBox from './offer-box';

const SubscribeBlock = () => {
  return (
    <div className={styles.subscribeBlock}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <OfferBox />
        </div>
      </div>
    </div>
  );
};

export default SubscribeBlock;
