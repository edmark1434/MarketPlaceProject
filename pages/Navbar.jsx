import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-gradient-to-r from-blue-600 via-yellow-400 to-red-500 fixed w-full z-50 shadow-lg px-6 py-2">
            <div className="flex items-center gap-3">
                <img className="w-12 h-12 rounded-full border-4 border-yellow-300 bg-white shadow" src="/apas-logo.png" alt="Barangay Apas Logo" />
                <span className="font-extrabold text-2xl text-white drop-shadow">Barangay Apas</span>
            </div>
            <div className="flex justify-end">
                <ul className="flex gap-8 md:gap-12">
                    <li className="font-bold text-white hover:text-yellow-200 transition"><a href="#home">Home</a></li>
                    <li className="font-bold text-white hover:text-yellow-200 transition"><a href="#about">About</a></li>
                    <li className="font-bold text-white hover:text-yellow-200 transition"><a href="#contacts">Contact</a></li>
                    <li className="font-bold"><Link className="text-white hover:text-yellow-200 transition" to="/sign-up">Sign Up</Link></li>
                    <li className="font-bold"><Link className="text-white hover:text-yellow-200 transition" to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;