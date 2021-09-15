import React from 'react'
import { Link } from 'react-router-dom'

import styles from './BlogArticle.module.scss'

type articleEntityType = {
        imgSrc: string;
        title: string;
        text: string;
        date: string
    }

type blogArticleTypes = {
    articleEntity: articleEntityType
}

const BlogArticle: React.FunctionComponent<blogArticleTypes> = ({articleEntity}) => {
    const { blogArticle, blogArticleImg, info, infoTitle, infoText, panel, infoDate, more } = styles

    const { imgSrc, title, text, date } = articleEntity

    return (
        <article className={blogArticle}>
            <img className={blogArticleImg} src={imgSrc} alt="" tabIndex={0}/>
            <div className={info}>
                <h3 className={infoTitle}>{title}</h3>
                <div className={infoText}>{text}</div>
                <div className={panel}>
                    <div className={infoDate}>
                        {date}
                    </div>
                    <Link to='/more' className={more} tabIndex={0}>
                        Read More
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default BlogArticle