import { IComment, IProduct } from "src/typings/product";

interface IData {
    products: IProduct[]
    reviews: IComment[]
    productsFilter: string[]
}
export const data: IData ={
    products: [
        {id: 1, title: 'Floral Print One Shoulder Cutout Slit Thigh Maxi Dress Elegant Sleeveless Maxi Dress', price: '$100', image: 'https://image.geeko.ltd/original/48dcf5eb-57ce-426e-8de7-8865d6576871-27419-pc', 
        colors: {
            'blue': [
                'https://image.geeko.ltd/original/48dcf5eb-57ce-426e-8de7-8865d6576871-27419-pc',
                'https://image.geeko.ltd/original/48dcf5eb-57ce-426e-8de7-8865d6576871-27419-pc-sec',
                'https://image.geeko.ltd/original/48dcf5eb-57ce-426e-8de7-8865d6576871-27419-pc-0',
            ],
            'Multicolor': [
                'https://image.geeko.ltd/original/480f6024-0071-42cb-b38a-975f6fc51e2a-37468-pc',
                'https://image.geeko.ltd/original/480f6024-0071-42cb-b38a-975f6fc51e2a-37468-pc-sec',
                'https://image.geeko.ltd/original/480f6024-0071-42cb-b38a-975f6fc51e2a-37468-pc-0',
            ],
            'Apricot': [
                'https://image.geeko.ltd/original/4b3a82ff-fc66-442f-8aae-673c86c19008-15483-pc',
                'https://image.geeko.ltd/original/4b3a82ff-fc66-442f-8aae-673c86c19008-15483-pc-sec',
                'https://image.geeko.ltd/original/4b3a82ff-fc66-442f-8aae-673c86c19008-15483-pc-0'
            ]
        }, sizes: ['s', 'm', 'l', 'xl'], rate: 4.7, description: '', category: 'women\'s clothing'},
        {id: 2, title: 'Sequin Spaghetti Strap Slit Dress', price: '$150', image: 'https://image.geeko.ltd/original/ac28758c-8209-453d-806f-d260bb819854-74702-pc', 
        colors:{
            'black': [
                'https://image.geeko.ltd/original/ac28758c-8209-453d-806f-d260bb819854-74702-pc',
                'https://image.geeko.ltd/original/ac28758c-8209-453d-806f-d260bb819854-74702-pc-sec',
                'https://image.geeko.ltd/original/ac28758c-8209-453d-806f-d260bb819854-74702-pc-2',
                'https://image.geeko.ltd/original/ac28758c-8209-453d-806f-d260bb819854-74702-pc-3',
                'https://image.geeko.ltd/original/ac28758c-8209-453d-806f-d260bb819854-74702-pc-4',
                'https://image.geeko.ltd/original/ac28758c-8209-453d-806f-d260bb819854-74702-pc-5',
                'https://image.geeko.ltd/original/ac28758c-8209-453d-806f-d260bb819854-74702-pc-6'
            ]
        }, sizes: ['s', 'm', 'l', 'xl'], rate: 4.9, description: '', category: 'women\'s clothing'},
        {id: 3, title: 'Sheer Mesh & Stripes Keyhole Front Bodycon Dress', price: '$145',
        image: 'https://image.geeko.ltd/original/df6381cb-1a57-4892-ac89-3e7328a96d10-41739-pc', 
        colors: {
            'black': [
                'https://image.geeko.ltd/original/df6381cb-1a57-4892-ac89-3e7328a96d10-41739-pc',
                'https://image.geeko.ltd/original/df6381cb-1a57-4892-ac89-3e7328a96d10-41739-pc-sec',
                'https://image.geeko.ltd/original/df6381cb-1a57-4892-ac89-3e7328a96d10-41739-pc-0'
            ]
        }, sizes: ['s', 'm', 'l', 'xl'], rate: 4.9, description: '', category: 'women\'s clothing'
        },
        {id: 4, title: 'Plain One Shoulder Ruched Dress Solid Party Robe Skinny Clubwear Midi Dress', price: '$120',
        image: 'https://image.geeko.ltd/original/a0d4256f-8227-4fc2-84bb-064f12124bc8-01770-pc', 
        colors: {
            'blue': [
                'https://image.geeko.ltd/original/a0d4256f-8227-4fc2-84bb-064f12124bc8-01770-pc',
                'https://image.geeko.ltd/original/a0d4256f-8227-4fc2-84bb-064f12124bc8-01770-pc-sec',
                'https://image.geeko.ltd/original/a0d4256f-8227-4fc2-84bb-064f12124bc8-01770-pc-0'
            ],
            'red': [
                'https://image.geeko.ltd/original/adda11d8-f194-491a-9e1e-8525f5fe6121-75843-pc',
                'https://image.geeko.ltd/original/adda11d8-f194-491a-9e1e-8525f5fe6121-75843-pc-sec',
                'https://image.geeko.ltd/original/adda11d8-f194-491a-9e1e-8525f5fe6121-75843-pc-0'
            ],
            'black': [
                'https://image.geeko.ltd/original/9f05d7b9-d6c4-4467-a2d3-5fdeb9860fb1-10731-pc',
                'https://image.geeko.ltd/original/9f05d7b9-d6c4-4467-a2d3-5fdeb9860fb1-10731-pc-sec',
                'https://image.geeko.ltd/original/9f05d7b9-d6c4-4467-a2d3-5fdeb9860fb1-10731-pc-0'
            ]
        }, sizes: ['s', 'm', 'l', 'xl'], rate: 4.9, description: '', category: 'women\'s clothing'
        },
        {id: 5, title: 'Off Shoulder Short Sleeve Slit Maxi Dress', price: '$130',
        image: 'https://image.geeko.ltd/original/a2dd2fb5-5581-4cb5-9f8c-31d5f0a76162-05364-pc', 
        colors: {
            'white': [
                'https://image.geeko.ltd/original/a2dd2fb5-5581-4cb5-9f8c-31d5f0a76162-05364-pc',
                'https://image.geeko.ltd/original/a2dd2fb5-5581-4cb5-9f8c-31d5f0a76162-05364-pc-sec',
                'https://image.geeko.ltd/original/a2dd2fb5-5581-4cb5-9f8c-31d5f0a76162-05364-pc-0'
            ]
        }, sizes: ['s', 'm', 'l', 'xl'], rate: 4.9, description: '', category: 'women\'s clothing'
        },
        {id: 6, title: 'Ruffles Backless Crop Top & Maxi Skirt Set', price: '$120',
        image: 'https://image.geeko.ltd/original/6202d7f3-9143-491a-b270-e34ff2459a63-90298-pc', 
        colors: {
            'yellow': [
                'https://image.geeko.ltd/original/6202d7f3-9143-491a-b270-e34ff2459a63-90298-pc',
                'https://image.geeko.ltd/original/6202d7f3-9143-491a-b270-e34ff2459a63-90298-pc-sec',
                'https://image.geeko.ltd/original/6202d7f3-9143-491a-b270-e34ff2459a63-90298-pc-0'
            ],
            'white': [
                'https://image.geeko.ltd/original/82ce836a-3d66-42cd-b741-11fa7356031b-76941-pc',
                'https://image.geeko.ltd/original/82ce836a-3d66-42cd-b741-11fa7356031b-76941-pc-sec',
                'https://image.geeko.ltd/original/82ce836a-3d66-42cd-b741-11fa7356031b-76941-pc-0'
            ],
            'purplish blue': [
                'https://image.geeko.ltd/original/2be2130c-9f51-478d-87ce-f6c9b07b9b3e-94043-pc',
                'https://image.geeko.ltd/original/2be2130c-9f51-478d-87ce-f6c9b07b9b3e-94043-pc-sec',
                'https://image.geeko.ltd/original/2be2130c-9f51-478d-87ce-f6c9b07b9b3e-94043-pc-0'
            ]
        }, sizes: ['s', 'm', 'l', 'xl'], rate: 4.9, description: '', category: 'women\'s clothing'
        },
        {id: 7, title: 'Cowl Neck Sleeveless Pearl Studded High Waist Slit Dress Elegant Slim Dress', price: '$100',
        image: 'https://image.geeko.ltd/original/94243067-6c0a-403e-b184-2760ff1d7751-94623-pc', 
        colors: {
            'green': [
                'https://image.geeko.ltd/original/94243067-6c0a-403e-b184-2760ff1d7751-94623-pc',
                'https://image.geeko.ltd/original/94243067-6c0a-403e-b184-2760ff1d7751-94623-pc-sec',
                'https://image.geeko.ltd/original/94243067-6c0a-403e-b184-2760ff1d7751-94623-pc-0'
            ]
        }, sizes: ['s', 'm', 'l', 'xl'], rate: 4.9, description: '', category: 'women\'s clothing'
        },
        {id: 8, title: 'Solid Color Surplice Neck Ruffle Hem Sleeve Slit Thigh Maxi Dress', price: '$120',
        image: 'https://image.geeko.ltd/original/ac79f725-788b-4dee-be82-7064039adf97-36583-pc', 
        colors: {
            'pink': [
                'https://image.geeko.ltd/original/ac79f725-788b-4dee-be82-7064039adf97-36583-pc',
                'https://image.geeko.ltd/original/ac79f725-788b-4dee-be82-7064039adf97-36583-pc-sec',
                'https://image.geeko.ltd/original/ac79f725-788b-4dee-be82-7064039adf97-36583-pc-0'
            ]
        }, sizes: ['s', 'm', 'l', 'xl'], rate: 4.9, description: '', category: 'women\'s clothing'
        },
        {id: 9, title: 'One Shoulder Slash Neck Asymmetrical Slit Plain Dress Chic Casual Midi Dresses', price: '$140',
        image: 'https://image.geeko.ltd/original/ad024ea7-5500-4ef8-bc5b-cf320370186d-26341-pc', 
        colors: {
            'green': [
                'https://image.geeko.ltd/original/ad024ea7-5500-4ef8-bc5b-cf320370186d-26341-pc',
                'https://image.geeko.ltd/original/ad024ea7-5500-4ef8-bc5b-cf320370186d-26341-pc-sec',
                'https://image.geeko.ltd/original/ad024ea7-5500-4ef8-bc5b-cf320370186d-26341-pc-0'
            ]
        }, sizes: ['s', 'm', 'l', 'xl'], rate: 4.9, description: '', category: 'women\'s clothing'
        }
    ],
    reviews: [{author: 'bob0', createdDate: '2020-09-15', rating: 5, body: 'On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment'},
    {author: 'bob1', createdDate: '2020-10-19', rating: 4.5, body: 'On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment'},
    {author: 'bob2', createdDate: '2021-01-21', rating: 4, body: 'On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment'},
    {author: 'bob3', createdDate: '2020-03-09', rating: 3.5, body: 'On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment'}],
    productsFilter: ['NEW ARRIVALS', 'SPECIALS', 'BESTSELLERS', 'MOST VIEWED', 'FEATURED PRODUCTS',]

} 


export interface ICategory {
    [key: string]:  {
        title: string;
        links: {
            path: string
            label: string
        }[] 
        products: IProduct[]
    };
}
export interface ICategories {
    [key: string]: ICategory
}

export const Categories: ICategories = {
    women: {
        'TOPS': {
            title: 'TOPS',
            links: [
                {path: 'Awesome/', label: 'Awesome'},
                {path: 'Beachwear/', label: 'Beachwear'},
                {path: 'Beige/', label: 'Beige'},
                {path: 'Cool_New/', label: 'Cool New'},
                {path: 'Dress/', label: 'Dress'},
                {path: 'Gap/', label: 'Gap'},
                {path: 'Guess/', label: 'Guess'},
            ],
            products: []
        },
        'BOTTOMS': {
            title: 'BOTTOMS',
            links: [
                {path: 'Jeans/', label: 'Jeans'},
                {path: 'Lacoste/', label: 'Lacoste'},
                {path: 'Levi\'s/', label: 'Levi\'s'},
                {path: 'Model/', label: 'Model'},
                {path: 'Nice_Featured/', label: 'Nice Featured'},
                {path: 'Polo/', label: 'Polo'},
                {path: 'Pullover/', label: 'Pullover'},
            ],
            products: []
        },
        'ACCESSORIES': {
            title: 'ACCESSORIES',
            links: [
                {path: 'Scarf_Sale_13/', label: 'Scarf Sale 13%'},
                {path: 'Shirt/', label: 'Shirt'},
                {path: 'Shoes/', label: 'Shoes'},
                {path: 'Shorts/', label: 'Shorts'},
                {path: 'Summer/', label: 'Summer'},
                {path: 'Sunglasses/', label: 'Sunglasses'},
                {path: 'Vintage/', label: 'Vintage'},
            ],
            products: []
        },
        'BESTSELLERS': {
            title: 'BESTSELLERS',
            links: [],
            products: data.products
        }
    }
}
