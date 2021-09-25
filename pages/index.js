import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name="keywords" content="users" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur iure exercitationem facere optio dolorem fugit vitae. Minima reprehenderit, nihil voluptatem vero tenetur molestias perspiciatis necessitatibus cumque odio minus assumenda. </p>
      </div>
      </>
  )
}
