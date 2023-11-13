import { AddToCart } from "./AddToCart";
import { useState } from 'react';

const ProductDetailCard = ({ product, onAddProduct }) => {
    const [comment, setComment] = useState('');
    const [commentVisible, setCommentVisible] = useState(true);

    const addToCart = () => {
        onAddProduct(product, comment);
        setComment(''); // Clear the comment box content when adding to cart
        setCommentVisible(false);
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    return (
        <div className="p-5  flex w-full rounded-lg bg-slate-50 justify-center" >
            <div className="flex flex-wrap items-center justify-between">
                <h2 className="text-3xl">{product.name}</h2>
                <p className="text-2xl text-gray-500 line-clamp-4">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="text-3xl text-black">{product.price}</div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover hover:scale-150" alt={product.name}/>
            </div>
            {commentVisible && (
                <div className="w-full border-solid">
                    <label htmlFor="comment" className="text-xl">
                        Comment:
                    </label>
                    <input
                        type="text"
                        id="comment"
                        placeholder="Add a comment"
                        value={comment}
                        onChange={handleCommentChange}
                        className="w-full border rounded p-2 mt-2"
                    />
                </div>
            )}
            <div className="w-full flex items-center justify-center">
                <AddToCart onAddProduct={addToCart} />
            </div>
        </div>
    )
}

export default ProductDetailCard;
