import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero/Hero";
import Services from "./components/sections/Services/Services"

function App() {
    return (
        <div className="bg-brand-bg min-h-screen">
            <Header />
            <Hero />
            <Services />
        </div>
    );
}
export default App;