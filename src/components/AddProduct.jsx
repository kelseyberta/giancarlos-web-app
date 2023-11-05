export const AddProduct = ({ onAddProduct }) => {
    return (
        <div className="flex justify-end">
            <button onClick={onAddProduct} className="bg-tomato hover:bg-green-600 rounded-full w-5 h-5 flex items-center justify-center pb-1 text-lg"><span>+</span></button>
        </div>
    )
}