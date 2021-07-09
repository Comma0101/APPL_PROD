import Head from 'next/head'
import Front_page from '../components/front_page'
import BreakOut from '../components/break_out'
import Image from 'next/image'
import { getProducts } from '/lib/api.js'
import Link from 'next/Link'
import style from './index.module.css'

export async function getStaticProps() {
  return {
    props: {
      products: await getProducts()
    }
  }
}

export default function Home({ products }) {
  console.log(products)
  return (
    <div >
      <Front_page/>
      <BreakOut>
      New Arrivals
      </BreakOut>
      <ul className={style['product-grid']}>
        {products.map(product => ProductView({ product }))}
      </ul>
    </div>
  )
}

function ProductView({ product }) {
  return (
    <li key={product.id}>
      <Link href={`/product/${product.id}`} prefetch={false}>
        <a className={style.product}>
          <div className={style['product-image']}>
            <Image alt="" height="427" width="640" src={product.image} />
          </div>
          <div className={style['product-description']}>
            {product.name}
          </div>
          <div className={style['product-price']}>
            {product.price}
          </div>
        </a>
      </Link>
    </li>
  )
}