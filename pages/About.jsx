const About = () => {
    return (
        <div className="flex flex-row justify-evenly items-center p-10">
            <div className="flex flex-col gap-y-4 max-w-xl">
                <h1 className="font-bold text-4xl mb-4">About Barangay Apas</h1>
                <p className="text-lg text-blue-700 bg-yellow-100 rounded-xl p-4 border-l-8 border-red-400 shadow">
                    Barangay Apas is a vibrant community known for its rich culture and welcoming residents. <br />
                    Located in the heart of the city, it offers a blend of tradition and modern living.<br />
                    <br />
                    Our barangay hall serves as the center for local governance and community activities, fostering unity and progress among its people.
                </p>
            </div>
            <img src="/apas-img1.jpg" alt="Barangay hall pic" className="w-60 h-60 object-cover rounded-lg shadow-lg" />
        </div>
    );
};
export default About;