export interface IProduct {
    id: number
    title:string
    price:string
    description:string
    category: string 
    image:string
    colors: {
        [key: string]: string[]
    }
    sizes: string[]
    rate: number
}

export interface IComment {
    author: string, 
    createdDate: string, 
    rating: number, 
    body: string
}
