import { Path } from "./path"
import lupa from '../assets/icons/lupa.svg'
import map from '../assets/icons/earth.svg'
import profile from '../assets/icons/profile.svg'
import cart from '../assets/icons/korzina.svg'


export const MainMenuLinks: {
    [key: string] : {path: string ,label: string}
} = {
    'aboutUs': {path: `/About`, label: 'About Us'},
    'woman': {path: `/products/categories/Women`, label: 'Women'},
    'men':  {path: `/products/categories/Men`, label: 'Men'},
    'beaty': {path: `/products/categories/Beauty`, label: 'Beauty'},
    'accessories': {path: `/products/categories/Accessories`, label: 'Accessories'},
    'blog': {path: `/Blog`, label: 'Blog'},
    'cotacts': {path: `Contact`, label: 'Contact'}
}
export const  MenuActionLinks = [
    {path: Path.SEARCH, icon: lupa, label: 'search'},
    {path: Path.MAP, icon: map, label: 'map'},
    {path: Path.LOGIN, icon: profile, label: 'profile'},
    {path: Path.CARTS, icon: cart, label: 'cart'}
]

export const CategoryLinks = [
    {path: '/category/Men', label:'Men'},
    {path: '/category/Women', label:'Women'},
    {path: '/category/Accessories', label:'Accessories'},
    {path: '/category/Beauty', label:'Beauty'},
]

export const InfomationLinks = [
    {path: '/About', label:'About Us'},
    {path: '/Contact', label:'Contact Us'},
    {path: '/Blog', label:'Blog'},
    {path: '/FAQs', label:'FAQs'},
]

export const UsefulLinks = [
    {path: '/Terms_&_Conditions', label:'Terms & Conditions'},
    {path: '/Returns_&_Exchanges', label:'Returns & Exchanges'},
    {path: '/Shipping_&_Delivery', label:'Shipping & Delivery'},
    {path: '/Privacy_Policy', label:'Privacy Policy'}
]

export const FooterBlockLinks = [
    {title: 'Categories' , links: CategoryLinks},
    {title: 'Infomation', links: InfomationLinks},
    {title: 'Useful links', links: UsefulLinks}
]
