import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 via-blue-100 to-red-100">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center border-4 border-blue-300 relative">
                {/* Barangay logo or icon */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-yellow-400 border-4 border-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                    <img src="/apas-logo.png" alt="Barangay Apas Logo" className="w-20 h-20 rounded-full" />
                </div>
                <h2 className="text-3xl font-extrabold mb-2 mt-14 text-blue-700 drop-shadow">Barangay Apas Login</h2>
                <p className="mb-6 text-red-700 font-medium">Welcome to your community portal</p>
                <form className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-semibold text-blue-700">Email</label>
                        <input id="email" type="email" className="px-4 py-2 rounded-lg border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-yellow-50" placeholder="Enter your email" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm font-semibold text-blue-700">Password</label>
                        <input id="password" type="password" className="px-4 py-2 rounded-lg border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-yellow-50" placeholder="Enter your password" required />
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <div className="flex justify-end">
                        <Link to="/sign-up" className="text-xs text-blue-600 hover:underline">Doesn't have an account yet?</Link>
                    </div>
                    <div className="flex justify-end">
                        <a href="#" className="text-xs text-red-600 hover:underline">Forgot password?</a>
                    </div>
                    </div>
                    <button type="submit" className="mt-2 bg-gradient-to-r from-blue-600 via-yellow-400 to-red-500 text-white font-bold py-2 rounded-lg shadow hover:from-blue-700 hover:to-red-600 transition">Login</button>
                </form>
            </div>
        </div>
    );
};
export default Login;