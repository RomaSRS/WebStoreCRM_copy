
import {Link} from 'react-router-dom'
import cn from 'classnames'

import styles from './blockLinks.module.scss'


type BlockPropTypes = {
    title: string;
    links: {
        path: string
        label: string
    }[];
    className?: string 

}

const BlockLinks:React.FC<BlockPropTypes> = ({title, links, className}) => {
 
    return (
        <div className={cn(styles.block, className) }>
            <h4 className={styles.block__title}>{title}</h4>
            <ul>
                {
                    links.map((link) => (
                        <li key={link.label}>
                            <Link  className={styles.block__item} to={link.path}>
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BlockLinks
