import styles from './OfferTitle.module.scss';

export default function OfferTitle() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Special Offer</div>
      <div className={styles.subtitle}>Subscribe</div>
      <div className={styles.offerText}>
        And
        <span className={styles.textColor}> Get 10% Off </span>
      </div>
    </div>
  );
}
