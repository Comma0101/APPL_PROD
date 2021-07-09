import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import 'bootstrap/dist/css/bootstrap.css'
import './_app.css'
import style from './_app.module.css'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <script type="module" data-id="KbTF8dXGss" src="https://api.jamcart.dev/v1/jamcart.js"></script>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="A demo e-commerce storefront built with Next.js and JamCart" />
    </Head>
      <Nav/>
  

    <Component {...pageProps} />

    <footer className={style.demo}>
      <p>
        Demo E-commerce website built with <a href="https://reactjs.org/">React</a>, <a href="https://nextjs.org/">Next.js</a>, and <a href="https://jamcart.io">Jamcart</a>
      </p>
      <p>
        Source available on <a href="https://github.com/JamCart/react-nextjs-vercel-demo">GitHub</a>
      </p>
      <p>
        Photos by <a href="https://unsplash.com/@sabrinnaringquist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sabrinna Ringquist</a> on <a href="https://unsplash.com/@sabrinnaringquist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </footer>
  </>
}