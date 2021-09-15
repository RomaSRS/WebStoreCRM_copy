import React from 'react'
import styles from './login.module.scss'

import {Formik, Form, Field,} from 'formik'
import * as Yup from 'yup';
import cn from 'classnames'


import facebook from '../../assets/icons/facebook.svg';
import google from '../../assets/icons/google.svg';
import apple from '../../assets/icons/apple.svg';




const EMAIL = {
    require: "Email is required!",
    errorMessage: "Email is invalid",
  };
const PASSWORD = {
    required: "Password is required",
    min: (count: number) => `Password should be at least ${count} characters`,
    max: (count: number) => `Too much characters. Needs to be less than ${count}`,
};

const LoginSchema = Yup.object().shape({
    email: Yup.string().email(EMAIL.errorMessage).required(EMAIL.require),
    password: Yup
      .string()
      .min(6, PASSWORD.min(6))
      .max(40, PASSWORD.max(40))
      .required(PASSWORD.required),
});

interface IFormValues {
    email: string
    password: string
}

const Login:React.FC = () => {
    return (
        <div className='container'>
            <p>If you have an account with us, please log in.</p>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={(values: IFormValues) => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                {({ errors, touched, isSubmitting}) => (
                    <Form >
                        <div className={styles.row}>
                            <div className={styles.label}>
                                <label htmlFor="email">Email</label>
                            </div>
                            <Field id="email" name="email" type="email" placeholder="Enter your email"/>
                            {errors.email && touched.email ? <div className={styles.error}>{errors.email}</div> : null}
                        </div>

                        <div className={styles.row}>
                            <div className={cn(styles.spacebetween, styles.label)}>
                                <label htmlFor="password">Password</label>
                                <a href="*">Lost your password?</a>
                            </div>
                            <Field id="password" name="password" type="password" placeholder="Your password"/>
                            {errors.password && touched.password ? <div className={styles.error} >{errors.password}</div> : null}
                        </div>
                        <button className={cn(styles.btn, styles.btn_submit)} type="submit" 
                            disabled={isSubmitting ||
                            !!(errors.email && touched.email) ||
                            !!(errors.password && touched.password)}
                        >
                            <span>Login</span>
                        </button>
                    </Form>
                )}
                </Formik>

                <div className={styles.line}>
                    <span className={cn(styles.line__through, styles.line_left)}></span>
                    or
                    <span className={cn(styles.line__through, styles.line_right)}></span>
                </div>

                <div className={styles.social}>
                    <button className={styles.social__btn}>
                        <img src={facebook} alt="facebook" />
                    </button>
                    <button className={styles.social__btn}>
                        <img src={google} alt="google" />
                    </button>
                    <button className={styles.social__btn}>
                        <img src={apple} alt="apple" />
                    </button>
                </div>
                
                <div className={styles.module__footer}>
                    <p>New Customer?</p>
                    <button className={cn(styles.btn, styles.btn_create)}><span>Create your account</span></button>
                </div>
        </div>
    )
}

export default Login
