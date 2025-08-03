import Navbar from '../pages/Navbar';
import About from '../pages/About';
import Service from '../pages/Service';
import Officials from '../pages/Officials';
import Contact from '../pages/Contact';
const Home = () => {
    return (
        <>
            <Navbar />
            <section id='home' className="bg-[url('/apas-img1.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center text-center bg-gradient-to-br from-yellow-100 via-blue-100 to-red-100 rounded-2xl p-12 shadow-2xl border-l-8 border-blue-400">
                    <h1 className="text-5xl font-extrabold mb-2 text-blue-700 drop-shadow">MABUHAY</h1>
                    <p className="text-lg italic mb-2 text-red-700 bg-yellow-100 rounded-xl px-4 py-2 border-l-8 border-red-400 shadow">Explore the fun and beautiful places around</p>
                    <h1 className="text-4xl font-bold mb-4 text-yellow-600 drop-shadow">BARANGAY APAS</h1>
                    <div>
                        <button className="font-bold text-center m-4 px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-yellow-400 to-red-500 text-white hover:from-blue-700 hover:to-red-600 transition shadow">Explore now!</button>
                    </div>
                </div>
            </section>
            <section id='about' className="py-5">
                <About />
            </section>
            <section id='service' className="py-5">
                <Service />
            </section>
            <section id='officials' className="py-5">
                <Officials />
            </section>
            <section id='contacts' className="py-5">
                <Contact />
            </section>
        </>
    );
};

export default Home;