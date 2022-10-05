import { useRouter } from "next/router"

const ProductDeatil = () => {

    const router = useRouter()
    const productId = router.query.productId

    return (
        <div>
            <h1>Details about Product {productId} </h1>
        </div>
    )
}

export default ProductDeatil