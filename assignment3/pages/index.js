import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Stage from './Stage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Startup Progress</title>
        <meta name="description" content="Using existing Next.js-generated components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My Startup Progress</h1>
        <p>why is not commiting!!!</p>
      </main>
      <div>
        <Stage name="Discovery"/>
        <Stage name="Delivery"/>
        <Stage name="Whatever"/>
      </div>
    </div>
  )
}