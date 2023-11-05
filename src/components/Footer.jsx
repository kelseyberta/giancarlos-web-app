import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer class="bg-gray-800">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <Link to="/" className="hover:underline">About</Link>
                        </li>
                        <li class="mb-4">
                            <Link to="/menu" className="hover:underline">Menu</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Contact US!</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="https://www.facebook.com/djtheese/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </li>
                        <li class="mb-4">
                        <a href="https://www.instagram.com/giancarlos_bakery_and_deli/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-300 sm:text-center">© 2023 Giancarlo's Bakery. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}