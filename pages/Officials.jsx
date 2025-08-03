const Officials = () => {
    return (
        <div className="flex flex-col items-center p-8 bg-gradient-to-br from-yellow-100 via-blue-100 to-red-100 rounded-3xl shadow-lg mx-4 my-8">
            <h1 className="text-4xl font-extrabold text-center my-8 text-blue-700 drop-shadow">Meet Our Officials</h1>
            <div className="w-full flex justify-center">
                <img src="/apas-officials.png" alt="Barangay Officials" className="w-full max-w-3xl h-96 object-cover rounded-xl border-8 border-yellow-400 shadow-lg" />
            </div>
        </div>
    );
};
export default Officials;