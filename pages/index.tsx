import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Loader from '../components/Loader'

export default function Home() {
  return (
    <div className={styles.container}>
      <Loader show></Loader>
      <Link href="/admin">Admin</Link>
      <br></br>
      <Link prefetch={false} href={{pathname:'/[username]',query:{username:'RajGM'}}}><a>RajGM Profile</a></Link>
    </div>
  )
}
