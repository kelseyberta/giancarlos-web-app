export const AddToCart = ({ onAddProduct }) => {
    return (
        <div className="flex justify-end">
            <button onClick={onAddProduct} className="bg-tomato hover:bg-green-600 w-70 h-25 font-bold rounded-xl px-3 py-3 flex items-center justify-center text-lg text-white"><span>Add To Cart</span></button>
        </div>
    )
}