import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    return (
        <>
            <h1 className="text-4xl font-extrabold text-center p-10 text-blue-700 drop-shadow">Contact Barangay Apas</h1>
            <div className="flex flex-col md:flex-row gap-10 justify-evenly items-center p-10 bg-gradient-to-br from-yellow-100 via-blue-100 to-red-100 rounded-3xl shadow-lg mx-4">
                {/* Phone */}
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow p-6 w-72 border-t-8 border-blue-400">
                    <div className="flex flex-row gap-3 items-center mb-2">
                        <i className="fas fa-phone-alt text-2xl text-blue-600"></i>
                        <span className="text-lg font-bold text-blue-700">Call Us</span>
                    </div>
                    <p className="text-center text-lg text-gray-700">+63 912 345 6789</p>
                </div>
                {/* Email */}
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow p-6 w-72 border-t-8 border-yellow-400">
                    <div className="flex flex-row gap-3 items-center mb-2">
                        <i className="fas fa-envelope text-2xl text-yellow-500"></i>
                        <span className="text-lg font-bold text-yellow-600">Email Us</span>
                    </div>
                    <p className="text-center text-lg text-gray-700">apasbarangay@email.com</p>
                </div>
                {/* Facebook */}
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow p-6 w-72 border-t-8 border-red-400">
                    <div className="flex flex-row gap-3 items-center mb-2">
                        <i className="fab fa-facebook-square text-2xl text-red-500"></i>
                        <span className="text-lg font-bold text-red-600">Facebook</span>
                    </div>
                    <p className="text-center text-lg text-gray-700">facebook.com/apasbarangay</p>
                </div>
            </div>
        </>
    );
};
export default Contact;