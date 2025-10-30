import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Building2, Smartphone, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function LandlordPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow border-b border-blue-100">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Frental Logo" className="h-10" />
            <span className="text-xl font-bold text-blue-700">Frental</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-base font-medium">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-blue-600 transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-600 transition"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-700 focus:outline-none text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-base font-medium">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-blue-600"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-600"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Download
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        id="hero"
        className="relative text-center flex flex-col justify-center items-center h-[90vh] text-white px-4 mt-16"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero1.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 relative z-10"
        >
          Smart Property Management for Landlords
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-2xl mx-auto mb-8 text-lg relative z-10"
        >
          Manage your rental properties, update vacancy status, and set water &
          electricity prices with ease.
        </motion.p>

        <div className="flex gap-4 relative z-10">
          <a
            href="#"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow"
          >
            Download APK
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow"
          >
            Google Play
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8"
      >
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Smartphone className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Mobile App for Landlords
            </h3>
            <p>
              Add and update your properties, units, and prices easily using a
              clean mobile interface.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Database className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Centralized Database</h3>
            <p>
              Your data is stored securely and syncs in real-time with the admin
              dashboard.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Building2 className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
            <p>
              View, verify, and manage all submitted property data seamlessly.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Our System?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Keep your listings up to date, save time, and reach tenants faster
          with one simple app.
        </p>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 text-center bg-blue-100">
        <h2 className="text-3xl font-bold mb-6">Download the App</h2>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow"
          >
            Download APK
          </a>
          <a
            href="#"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow"
          >
            Google Play
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-blue-600 text-white">
        <p>© {new Date().getFullYear()} Frental. All rights reserved.</p>
      </footer>
    </div>
  );
}
