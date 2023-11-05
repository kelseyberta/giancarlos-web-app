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
    const [notification, setNotification] = useState(""); // Notification state

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const onAddProduct = (product) => {
        dispatch(addToCart(product));
        setNotification(`${product.name} added to the cart.`); // Set the notification message
        console.log(`Notification: ${notification}`);

        setTimeout(() => {
            setNotification(""); // Clear the notification after a certain time
        }, 3000); // Clear the notification after 3 seconds
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
            {
                products.status !== 'fulfilled' ? (
                    <div>loading...</div>
                ) : (
                    <div className="menu-wrapper">
                        {
                            products.products && (
                                <Tabs
                                    list={products.products.map((product) => product.name.name)}
                                    activeTab={activeTab}
                                    onTabSwitch={onTabSwitch}
                                />
                            )
                        }
                        <div className="flex flex-wrap mx-3 justify-content-center">
                            {
                                products.products && products.products[activeTabIndex].products.map((product, index) => {
                                    return (
                                        <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct} />
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
            {notification && <div className="notification fixed top-0 inset-x-0 mx-auto mt-4 w-80 bg-green-200 p-2 rounded-lg">{notification}</div>} {/* Display the notification */}
        </div>
    )
}

export default Menu;
