import React, { useState } from 'react'

import { Rate } from 'antd';
import cn from 'classnames'

import styles from './productPage.module.scss'
import './preview-swiper/product-swiper.scss';


import Cookies from 'src/components/cookies'
import ProductSwiper from './preview-swiper/ProductSwiper';
import ListSwiper from './preview-swiper/ListSwiper';



import {ReactComponent as Size} from '../../assets/icons/size-icon.svg'
import {ReactComponent as Delivery} from '../../assets/icons/delivery.svg'
import {ReactComponent as Exchanges} from '../../assets/icons/exchanges-icon.svg'
import {ReactComponent as Email} from '../../assets/icons/email-icon.svg'

import stripe from '../../assets/icons/Stripe.png'
import aes256 from '../../assets/icons/AES256.png'
import paypal from '../../assets/icons/paypal.png'
import visa from '../../assets/icons/visa.png'
import masterCard from '../../assets/icons/mastercard.png'
import discover from '../../assets/icons/discover.png'
import americanExpress from '../../assets/icons/american-express.png'
import Review from './review';


import { data } from 'src/utils/mok.data';
import ProductSelect from 'src/components/ProductSelect';
import ProductActions from 'src/components/ProductActions';


const ProductPage:React.FC = () => {

    const {products, reviews} = data

    const {colors, sizes, id, title, description} = products[0]
 
    
    const colorKeys = Object.keys(colors);
    
    const [selectedColor, setSelectedColor] = useState(colorKeys[0])
    const [selectedSize, setSelectedSize] = useState(sizes[0])

    const [isWrite, setIsWrite] = useState(false)
    const [reviewData, setReviewData] = useState({body: '', rate: 5})

    let photos = colors[selectedColor]
    const paymentIcon = [stripe, aes256, paypal, visa, masterCard, discover, americanExpress]


    const handlerColor = (value: string) => {
        setSelectedColor(value) 
    }
    const handlerSize = (value: string) => {
        setSelectedSize(value)
    }
    const handlerAdd = () => {
        console.log('add to cart:', id, selectedColor, selectedSize)
    }
    const handlerLike = () => {
        console.log('like', id)
    }
    const handlerCompare = () => {
        console.log('add to compare', id, selectedColor, selectedSize)
    }
    const handleReviewInput:React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setReviewData({
            ...reviewData,
            body: e.target.value
        })
    }
    const handleRate = (value: number) => {
        setReviewData({
            ...reviewData,
            rate: value
        })
    }
    const sendReview:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        console.log(reviewData)
        setIsWrite(false)
        setReviewData({body: '', rate: 5})
    }

    return (
        <React.Fragment>
            <Cookies />
            <div className={styles.titleWrap}>
                <div className={'container'}>
                    <h1>{title}</h1>
                    <div className={styles.info}>
                        <div >
                            <Rate
                                disabled
                                className={styles.rating}
                                allowHalf 
                                defaultValue={5}
                            />
                            <span> {reviews.length} Reviews</span>
                        </div>
                        <div className={styles.sku}>
                            <div className={styles.sku__item}>
                                <span>SKU:</span><b>777</b>
                            </div>
                            <div className={styles.sku__item}>
                                <span>Availability:</span><b>In Stock</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={styles.product}>
                    <ProductSwiper photos={photos}/>
                    <div className={styles.product__info}>
                        <h3 className={styles.title}><span className={styles.product__info_title}>Color:</span> {selectedColor}</h3>
                        <ProductSelect selectionArr={colorKeys} selectedItem={selectedColor} handlerClick={handlerColor} images={colors}/>
                        <h3 className={styles.title}><span className={styles.product__info_title}>size:</span> {selectedSize}</h3>
                        <ProductSelect selectionArr={sizes} selectedItem={selectedSize} handlerClick={handlerSize}/>
                        <div className={styles.guidLink}>
                            <a href="https://www.craftsportswear.com/global/customer-service/size-guide">
                                <Size/> Size guide
                            </a>
                        </div>
                        <div className={cn(styles.row, styles.product__row)}>
                            <span className={styles.price}>$ 379.99</span>
                            <ProductActions
                                className={styles.product__actions}
                                handlerAdd={handlerAdd} handlerLike={handlerLike} handlerCompare={handlerCompare}
                            />
                        </div>

                        <div className={cn(styles.row, styles.service)}>
                            <button className={styles.service__item}>
                                <Delivery className={styles.service__icon}/> Shipping & Delivery
                            </button>
                            <button className={styles.service__item}>
                                <Exchanges className={styles.service__icon}/> Returns & Exchanges
                            </button>
                            <button className={styles.service__item}>
                                <Email className={styles.service__icon}/> Ask a question
                            </button>
                        </div>

                        <div className={styles.payment}>
                            <div className={styles.payment__title}>
                                <h3 className={styles.title}>guaranteed safe checkout</h3><span></span>
                            </div>
                            
                           {
                               paymentIcon.map((icon, i) => (
                                    <button key={`paymentUrl-${i}`} className={styles.payment__item}>
                                        <img src={icon} alt="payment system icon" />
                                    </button>
                               ))
                           }
                        </div>

                        <div className={styles.row}>
                            <h3 className={cn(styles.description_title, styles.title)}>DESCRIPTION</h3>
                            <p>{description}</p>
                        </div>

                        <div className={styles.row}>
                            <h3 className={styles.title}>ADDITIONAL INFORMATION</h3>
                        </div>
                        <ul className={styles.additional_info}>
                            <li>Color:<span>{colorKeys.join(', ')}</span></li>
                            <li>Size:<span>{sizes.join(', ')}</span></li>
                            <li>Material:<span>100% Polyester</span></li>
                        </ul>

                        <div className={cn(styles.row, styles.reviews)}>
                            <h3 className={styles.title}>REVIEWS</h3>
                            <div className={styles.reviews__row}>
                                <div>
                                    <Rate
                                        disabled
                                        className={styles.rating}
                                        allowHalf 
                                        value={reviewData.rate}
                                    />
                                    <span>2 Reviews</span>
                                </div>

                                <button onClick={() => setIsWrite(true)} className={styles.reviews__btn} hidden={isWrite}>
                                    Write a review
                                </button>
                            </div>
                            {
                                isWrite
                                ?
                                <form className={styles.review} onSubmit={sendReview}>
                                    <textarea className={styles.review__input} onChange={handleReviewInput} autoFocus/>
                                   
                                    <div className={styles.review__actions}>
                                        <Rate
                                            onChange={handleRate}
                                            className={styles.rating}
                                            allowHalf 
                                            defaultValue={5}
                                        />
                                        <div>
                                            <button type='submit' className={styles.review__btn}>send</button>
                                            <button className={styles.review__btn} onClick={() => setIsWrite(false)}>cancel</button>
                                        </div>
                                    </div>
                                </form>
                                :
                                null
                            }
                            <ul className={styles.reviews__list}>
                               {
                                   reviews.map((review, i) =>(
                                       <Review key={`review-${i}`} {...review}/>
                                   ))
                               }
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <ListSwiper />
                </div>
            </div>
            
            
        </React.Fragment>
    )
}

export default ProductPage
