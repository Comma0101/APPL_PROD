import Image from 'next/image'
import Head from 'next/head'
import { getProductById, getProducts } from '/lib/api.js'
import style from './product.module.css'

export async function getStaticPaths() {
    const products = await getProducts()
    const paths = products.map(product => ({
        params: {
            id: product.id
        }
    }))

    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    return {
        props: {
            product: await getProductById(params.id)
        }
    }
}

export default function ProductPage({ product }) {
    return <>
        <Head>
            <title>{product.name}</title>
        </Head>

        <div >
            <div >
                <Image alt="" height="427" width="640" src={product.image} />
            </div>

            <div >
                <h2>{product.name}</h2>
                <p >{product.price}</p>
            </div>

            <button type="button" className="btn btn-dark">


                <jamcart-add
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    open-cart
                >
                    Add to shopping bag
                </jamcart-add>


                </button>
           
        </div>
    </>
}