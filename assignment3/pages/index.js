import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Stage from './Stage'
import Item from './Item'

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1>My Startup Progress</h1>
      </main>
      <div>
        <Stage name="Foundation">
          <Item item="Create roadmap"></Item>
          <Item item="Competitor analysis"></Item>
        </Stage>
        <Stage name="Discovery">
          <Item item="Create roadmap"></Item>
          <Item item="Competitor analysis"></Item>
        </Stage>
        <Stage name="Delivery">
          <Item item="Setup virtual office"></Item>
          <Item item="Setup virtual office"></Item>
        </Stage>
      </div>
    </div>
  )
}