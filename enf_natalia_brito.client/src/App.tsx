import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero/Hero";
import Services from "./components/sections/Services/Services";
import About from "./components/sections/About/About";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import ContactCTA from "./components/sections/ContactCTA/ContactCTA";

function App() {
    return (
        <div className="bg-brand-bg min-h-screen">
            <Header />
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <ContactCTA />
        </div>
    );
}
export default App;