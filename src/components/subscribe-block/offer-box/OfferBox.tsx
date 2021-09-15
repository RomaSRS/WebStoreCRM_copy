import styles from './OfferBox.module.scss';
import SubscribeSignupForm from '../subscribe-signup-form/SubscribeSignupForm';
import OfferTitle from '../offer-title/OfferTitle';

const OfferBox = () => {
  return (
    <div className={styles.offerBox}>
      <OfferTitle />
      <SubscribeSignupForm />
    </div>
  );
};

export default OfferBox;
