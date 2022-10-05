import Link from "next/link"
import { useRouter } from "next/router"

const Home = () => {
    const router = useRouter()

    const handleClick1 = () => {
        console.log('Placing your order')
        router.push('/product')
    }
    const handleClick2 = () => {
        console.log('Placing your order')
        router.replace('/product')
    }
    return (
        <div>
            <h1>Home Page</h1>
            <Link href='/blog'>Blog</Link>
            <br />
            <Link href='/product'>Products</Link>
            <button onClick={() => { handleClick1() }}>
                Place Order-push
            </button>
            <button onClick={() => { handleClick2() }}>
                Place Order-replace
            </button>
        </div>
    )
}

export default Home