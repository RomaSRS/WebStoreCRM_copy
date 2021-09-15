import React, { useState } from 'react';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';

import styles from './productItem.module.scss';

import ProductSelect from 'src/components/ProductSelect';
import ProductActions from 'src/components/ProductActions';

import { IProduct } from 'src/typings/product';
import { TextLimit } from 'src/utils/textLimit';
import defaultImage from './default-product.png'
import { Path } from 'src/utils/path';



interface IProductItem {
    product: IProduct
}

const ProductItem:React.FC<IProductItem> = ({product}) => {
    const {id, title, price, image, colors, sizes, rate} = product
    const colorNames = Object.keys(colors)
    const colorPhoto = colors
    const [selectedColor, setSelectedColor] = useState(colorNames[0])
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const [previewIMG, setPreviewIMG] = useState(image)

    const productName = TextLimit(title, 35)
    const handlerColor = (color: string) => { 
        setSelectedColor(color) 
        setPreviewIMG(colors[color][0])
    }
    const handlerSize = (size: string) => {
        setSelectedSize(size)
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
   
    return (
        <div className={styles.productItem}>
            <Link  to={`${Path.PRODUCTS}${id}`}>
                <img src={previewIMG || defaultImage} alt="produtIMG"/>
            </Link>
            <div className={styles.productItem__info}>
                <Link to={`${Path.PRODUCTS}${id}`} className={styles.productItem__link}>{productName}</Link>
                <div className={styles.productItem__price}>
                    <span>{price}</span>
                    <Rate
                        className={styles.productItem__rating}
                        allowHalf 
                        defaultValue={rate}
                    />
                </div>
                <ProductSelect 
                    selectionArr={colorNames} selectedItem={selectedColor} 
                    handlerClick={handlerColor} images={colorPhoto} 
                    className={styles.productItem__colors}
                />
                <ProductSelect 
                    selectionArr={sizes} selectedItem={selectedSize} 
                    handlerClick={handlerSize} className={styles.productItem__sizes}
                />   
                <ProductActions 
                    handlerAdd={handlerAdd}
                    handlerLike={handlerLike}
                    handlerCompare={handlerCompare}
                />
            </div>
        </div>
    )
}

export default ProductItem
