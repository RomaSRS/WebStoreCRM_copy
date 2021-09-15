import { useFormik } from 'formik';
import styles from './SubscribeSignupForm.module.scss';

const SubscribeSignupForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className={styles.input}
      />
      <button className={styles.button} type="submit">
        <div className={styles.buttonLabel}>Subscribe</div>
      </button>
    </form>
  );
};

export default SubscribeSignupForm;
