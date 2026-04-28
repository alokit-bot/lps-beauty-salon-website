import React from "react";
import "@/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
    return (
        <div className="App" data-testid="app-root">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <WhyUs />
                <Testimonials />
                <Gallery />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
}

export default App;
