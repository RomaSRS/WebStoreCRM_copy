import React from 'react'
import { Link } from 'react-router-dom'
import BlogArticle from '../blog-article'
import one from '../../assets/images/one.jpg'
import two from '../../assets/images/two.jpg'
import three from '../../assets/images/three.jpg'

import styles from './Blog.module.scss'

const Blog: React.FunctionComponent = () => {
    const { blog, blogTitle, blogHeader, blogInner, btn, blogArticles } = styles

    const articles = [
        {
            imgSrc: one,
            title: "The Easiest Way to Break",
            text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
            date: "April 6, 2032"
        },
        {
            imgSrc: two,
            title: "Wedding Season",
            text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
            date: "April 6, 2032"
        },
        {
            imgSrc: three,
            title: "Recent Favorites On Repeat",
            text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
            date: "April 6, 2032"
        }
    ]

    return (
        <div className={blog}>
            <div className='container'>
                <div className={blogInner}>
                    <header className={blogHeader}>
                        <h2 className={blogTitle}>latest from blog</h2>
                        <Link to="see-all" className={btn}>see all</Link>
                    </header>
                    <div className={blogArticles}>
                        {articles.map(article => <BlogArticle articleEntity={article}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog