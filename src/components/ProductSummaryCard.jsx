import { useDispatch } from "react-redux";
import { incrementProductAmount, decrementProductAmount, removeFromCart } from "../stores/cart/cartSlice";

export const ProductSummaryCard = ({ product }) => {
    const dispatch = useDispatch();
    
    return (
        <div key={product} className="flex p-1 sm:p-2 border-b border-b-gray-200">
            <div className="product-image mr-2 border border-grey-200 rounded-lg ">
                <img className="h-20 w-20" src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-info pr-4">
                <h3>{product.name}</h3>
                <p className="text-gray-600">{product.desciption}</p>
                {product.comment && ( // Display the comment if available
                    <p className="text-gray-600">{product.comment}</p>
                )}
            </div>
            <div className="product-price-qt flex flex-col items-center justify-center">
                <div className="price text-lg">{`$${product.price*product.amount}`}</div>
                <div className="quantity flex">
                <button className="p-2 text-lg" disabled={product.amount <= 0} onClick={() => dispatch(decrementProductAmount({ _id: product._id }))}>-</button>
                    <span className=" text-lg py-5">{product.amount}</span>
                <button className="p-2 text-lg" disabled={product.amount <= 0} onClick={() => { console.log('Product ID:', product._id); dispatch(incrementProductAmount({ _id: product._id }))}}>+</button>
                <button className="p-4 text-red-600 font-extrabold text-2xl" onClick={() => dispatch(removeFromCart({ _id: product._id }))}>X</button>
                
                </div>
            </div>
        </div>
    )
}