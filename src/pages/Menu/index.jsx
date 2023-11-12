import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Tabs } from "../../components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";

const Menu = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [notification, setNotification] = useState("");

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const onAddProduct = (product, comment) => { // Modified to accept comment data
        const productWithComment = comment ? { ...product, comment } : product; // Include comment if available
        dispatch(addToCart(productWithComment));
        setNotification(`${product.name} added to the cart.`);
        setTimeout(() => {
            setNotification("");
        }, 3000);
    }

    const onTabSwitch = (newActiveTab) => {
        setActiveTab(newActiveTab);
        let categories = products.products.map((product) => product.name.name);
        let index = categories.findIndex(category => newActiveTab === category);
        if (index > -1) {
            setActiveTabIndex(index);
        } else {
            setActiveTabIndex(0);
        }
    }

    return (
        <div className="bg-white relative">
            {/* ... existing code ... */}
            {
                products.products && products.products[activeTabIndex].products.map((product, index) => {
                    return (
                        <ProductDetailCard 
                            key={index} 
                            product={product} 
                            onAddProduct={onAddProduct} 
                        />
                    )
                })
            }
        </div>
    )
}

export default Menu;
