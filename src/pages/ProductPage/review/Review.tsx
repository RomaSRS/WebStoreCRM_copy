import React from 'react'
import { Rate } from 'antd'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import styles from './review.module.scss'

interface IReviewProps {
    author: string
    createdDate: string
    rating: number
    body: string
}

const Review:React.FC<IReviewProps> = ({author, createdDate, rating, body}) => {
    return (
        <li className={styles.review}>
            <div className={styles.review__header}>
                <h4>{author}</h4>
                <div>
                    <span>{formatDistanceToNow(new Date(createdDate))} ago</span>
                    <Rate
                        disabled
                        className={styles.review__rate}
                        allowHalf 
                        value={rating}
                    />
                </div>
            </div>
            <p className={styles.review__text}>{body}</p>
        </li>
    )
}

export default Review
