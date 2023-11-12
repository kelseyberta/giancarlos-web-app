import { AddToCart } from "./AddToCart";

const ProductDetailCard = ({ product, onAddProduct }) => {

    const addToCart = () => {
        onAddProduct(product)
    }
    const renderCustomWritingBox = () => {
        if (product.category === "cakes") {
            return (
                <div className="w-full">
                    <label htmlFor="customWriting" className="text-xl">
                        Custom Writing:
                    </label>
                    <input
                        type="text"
                        id="customWriting"
                        placeholder="Enter your custom message"
                        // You might want to handle the input value change here
                        // For example: onChange={(e) => handleCustomWritingChange(e)}
                        className="w-full border rounded p-2 mt-2"
                    />
                </div>
            );
        }
        return null; // Return null if not in the "cakes" category
    };
    return (
        <div className="p-5  flex w-full rounded-lg bg-slate-50 justify-center" >
            <div className="flex flex-wrap items-center justify-between">
                <h2 className="text-3xl">{product.name}</h2>
                <p className="text-2xl text-gray-500 line-clamp-4">
                    {product.desciption}
                </p>
                <div className="flex items-center justify-between">
                    <div className="text-3xl text-black">{product.price}</div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover hover:scale-150" alt={product.name}/>
            </div>
            <div className="w-full flex items-center justify-center">
                <AddToCart onAddProduct={addToCart} />

            </div>
            {renderCustomWritingBox()}
        </div>
    )
    
}

export default ProductDetailCard;