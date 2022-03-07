import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Stage from './Stage'
import Item from './Item'

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
        <p>I think this actually works now</p>
      </main>
      <div>
        <Stage name="Foundation"/>
          <Item item="Setup virtual office"></Item>
          <Item item="Set mission & vision"></Item>
          <Item item="Select business name"></Item>
          <Item item="Buy domains"></Item>
        <Stage name="Discovery"/>
          <Item item="Create roadmap"></Item>
          <Item item="Competitor analysis"></Item>
        <Stage name="Delivery"/>
          <Item item="Setup virtual office"></Item>
          <Item item="Setup virtual office"></Item>
      </div>
    </div>
  )
}