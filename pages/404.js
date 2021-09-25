import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
const PageNotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        },3000)
    })
    return (
        <>
            <Head>
                <title>User List | 404</title>
                <meta name="keywords" content="users" />
            </Head>
            <div className="not-found">
                <h1>oooops!</h1>
                <h2>That page can not be found.</h2>
                <p>Go back to <Link href="/"><a>Home</a></Link></p>
            </div>
        </>
    );
}
 
export default PageNotFound;