import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { ProductSummaryCard } from "./ProductSummaryCard";


export const ProductSummary = () => {
    const cart = useSelector(cartProducts);
    const total = cart.reduce((acc, product) => acc + (product.price * product.amount), 0);

    return (
        <div className="flex flex-col overflow-y-auto max-h-96">
            {cart && cart.map((product, index) => {
                return (
                    <ProductSummaryCard product={product} key={index} />
                )
            })}
            <div className="total text-xl">
                Total: ${total.toFixed(2)}
            </div>
        </div>
    )
}