import { Link } from "react-router-dom";

const Signup = () => {
    return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 via-blue-100 to-red-100">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center border-4 border-blue-300 relative overflow-visible mt-12"  style={{ maxHeight: '90vh' }}>
                {/* Barangay logo or icon */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-yellow-400 border-4 border-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg z-20">
                    <img src="/apas-logo.png" alt="Barangay Apas Logo" className="w-24 h-24 rounded-full object-contain" />
                </div>
                <h2 className="text-3xl font-extrabold mb-2 mt-14 text-blue-700 drop-shadow">Barangay Apas Sign Up</h2>
                <p className="mb-6 text-red-700 font-medium">Create your citizen account</p>
                <form className="w-full flex flex-col gap-4 max-h-80 overflow-y-auto pr-2">
                    <div className="flex flex-row justify-evenly">
                        <div className="flex flex-col justify-evenly ">
                        <label htmlFor="firstname" className="text-sm font-semibold text-blue-700">Firstname</label>
                        <input id="firstname" type="text" className="px-2 py-1 text-sm rounded-md border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-yellow-50" placeholder="Enter your firstname" required />
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <label htmlFor="lastname" className="text-sm font-semibold text-blue-700">Lastname</label>
                            <input id="lastname" type="text" className="px-2 py-1 text-sm rounded-md border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-yellow-50" placeholder="Enter your lastname" required />
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly">
                        <div className="flex flex-col gap-1 ">
                        <label htmlFor="middle name" className="text-sm font-semibold text-blue-700">Middlename</label>
                        <input id="mname" type="text" className="px-2 py-1 text-sm rounded-md border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-yellow-50" placeholder="Enter your middlename" required />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="extension" className="text-sm font-semibold text-blue-700">Extension</label>
                            <input id="extension" type="text" className="px-2 py-1 text-sm rounded-md border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-yellow-50" placeholder="Enter your password" required />
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly">
                        <div className="flex flex-col gap-1 ">
                        <label htmlFor="email" className="text-sm font-semibold text-blue-700">Email</label>
                        <input id="email" type="email" className="px-2 py-1 text-sm rounded-md border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-yellow-50" placeholder="Enter your email" required />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-sm font-semibold text-blue-700">Password</label>
                            <input id="password" type="password" className="px-2 py-1 text-sm rounded-md border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-yellow-50" placeholder="Enter your password" required />
                        </div>
                    </div>
                    <div className="pl-5 pr-4">
                        <div className="flex flex-col gap-1">
                                <label htmlFor="address" className="text-sm font-semibold text-blue-700">Address</label>
                                <input id="address" type="text" className="px-2 py-1 text-sm rounded-md border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-yellow-50" placeholder="Enter your Address" required />
                        </div>
                        <div className="flex flex-col gap-1">
                                <label htmlFor="dob" className="text-sm font-semibold text-blue-700">Date of Birth</label>
                                <input id="dob" type="date" className="px-2 py-1 text-sm rounded-md border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-yellow-50" placeholder="Enter your birthdate" required />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Link to="/login" className="text-xs text-blue-600 hover:underline">Already have an account?</Link>
                    </div>
                    <button type="submit" className="mt-2 bg-gradient-to-r from-blue-600 via-yellow-400 to-red-500 text-white font-bold py-2 rounded-lg shadow hover:from-blue-700 hover:to-red-600 transition">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
export default Signup;