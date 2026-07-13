import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero/Hero";
import Services from "./components/sections/Services/Services";
import About from "./components/sections/About/About";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import ContactCTA from "./components/sections/ContactCTA/ContactCTA";
import Footer from "./components/layout/Footer";
import Video from "./components/sections/Video/Video";

function App() {
    return (
        <div className="bg-brand-bg min-h-screen">
            <Header />
            <Hero />
            <Services />
            <Video />
            <About />
            <Testimonials />
            <ContactCTA />
            <Footer />
        </div>
    );
}
export default App;