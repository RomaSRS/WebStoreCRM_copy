import React from 'react'

import styles from './footer.module.scss';
import blogStyles from '../BlockLinks/blockLinks.module.scss'

import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Twitter} from '../../assets/icons/twitter.svg';
import {ReactComponent as Instagram} from '../../assets/icons/instagram.svg';
import {ReactComponent as Pinterest} from '../../assets/icons/pinterest.svg';
import {ReactComponent as LocationIcon} from '../../assets/icons/address.svg';
import {ReactComponent as PhoneIcon} from '../../assets/icons/phone-call.svg';
import {ReactComponent as ClockIcon} from '../../assets/icons/clock.svg';
import {ReactComponent as MailIcon} from '../../assets/icons/email-icon.svg';
import Stripe from '../../assets/images/Stripe_x42.png';
import AES256 from '../../assets/images/AES256_x42.png';
import PayPal from '../../assets/images/paypal_2_x42.png';
import VISA from '../../assets/images/visa_x42.png';
import MasterCard from '../../assets/images/mastercard_x42.png';
import DISCOVER from '../../assets/images/discover_x42.png';
import AmericanExpress from '../../assets/images/american-express_x42.png';


import { FooterBlockLinks } from '../../utils/constants';
import BlockLinks from '../BlockLinks';



const Footer:React.FC = () => {
    return (
        <footer>
           
            <div className={styles.follow}>
                <div className={'container'}>
                    <div className={styles.follow__inner}>
                        <p>BE IN TOUCH WITH US:</p>

                        <div className={styles.follow__email}>
                            <input className={styles.follow__input} type="email" placeholder="Enter your email"/>
                            <button className={styles.follow__btn} type="button">Join Us</button>
                        </div>

                        <div className={styles.social}>
                            <a href="https://www.facebook.com" className={styles.social__link} target="_black" rel="noreferrer" title='facebook'>
                                <Facebook className={styles.social__icon}/>
                            </a>
                            <a href="https://twitter.com" className={styles.social__link} target="_black" rel="noreferrer" title="twitter">
                                <Twitter className={styles.social__icon}/>
                            </a>
                            <a href="https://https://www.instagram.com" className={styles.social__link} target="_black" rel="noreferrer" title="instagram">
                                <Instagram className={styles.social__icon}/>
                            </a>
                            <a href="https://www.pinterest.com/" className={styles.social__link} target="_black" rel="noreferrer" title="pinterest">
                                <Pinterest className={styles.social__icon}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <div className={styles.content}>
                    {
                        FooterBlockLinks.map(blockLinks => (
                            <BlockLinks title={blockLinks.title} links={blockLinks.links} />
                        ))
                    }
                    
                    <div className={blogStyles.block}>
                        <h4 className={blogStyles.block__title}>CONTACT US</h4>
                        <ul>
                            <li >
                                <address className={blogStyles.block__item}>
                                    <LocationIcon className={blogStyles.block__icon} />
                                    Ukraine, Kyiv,Khreshchatyk 1
                                </address>
                            </li>
                            <li>
                                <a className={blogStyles.block__item} href="+38 (050) 12 34 567">
                                    <PhoneIcon className={blogStyles.block__icon} />
                                    +38 (050) 12 34 567
                                </a>
                            </li>
                            <li className={blogStyles.block__item}>
                                <ClockIcon className={blogStyles.block__icon} />
                                All week 24/7
                            </li>
                            <li >
                                <a className={blogStyles.block__item} href="shaman.magic.music@gmail.com">
                                    <MailIcon className={blogStyles.block__icon} />
                                    shaman.magic.music@gmail.com
                                </a>
                            </li>
                        </ul>    
                    </div>
                </div>

           </div>
            <div className={styles.additionalInfo}>
                <div className={'container'}>
                    <div className={styles.additionalInfo__wrap}>
                        <div>Copyright © 2021 all rights reserved</div>

                        <ul className={styles.partners}>
                            <li><img src={Stripe} alt="Stripe" /></li>
                            <li><img src={AES256} alt="AES256" /></li>
                            <li><img src={PayPal} alt="PayPal" /></li>
                            <li><img src={VISA} alt="VISA" /></li>
                            <li><img src={MasterCard} alt="MasterCard" /></li>
                            <li><img src={DISCOVER} alt="DISCOVER" /></li>
                            <li><img src={AmericanExpress} alt="AmericanExpress" /></li>
                        </ul>

                        <a href="https://www.behance.net/shamandesign">Designed by <b>Oleh Chabanov</b></a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;
