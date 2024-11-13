import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./style/index.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import ContactUs from "./components/ContactUs";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import AllLaptop from "./components/AllLaptop";
import LaptopDetails from "./components/LaptopDetails";
import Accessories from "./components/Accessories";
import Service from "./components/Service";
import Support from "./components/Support";
import FindAStore from "./components/FindAStore";
import FeedBackForm from "./components/FeedBackForm";
import { laptops } from "./data/LaptopData"; // file contains laptops data.
import { stores } from "./data/StoreData";
import { CartProvider } from "./context/CartContext";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (keyword) => {
    const filteredLaptops = laptops.filter(
      (laptop) =>
        laptop.name.toLowerCase().includes(keyword.toLowerCase()) ||
        laptop.description.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearchResults(filteredLaptops);
  };
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <SearchBar onSearch={handleSearch} />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/result"
              element={<SearchResult results={searchResults} />}
            />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/All-laptops"
              element={<AllLaptop laptops={laptops} />}
            />
            <Route
              path="/laptop/:id"
              element={<LaptopDetails laptops={laptops} />}
            />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/services" element={<Service />} />
            <Route path="/support" element={<Support />} />
            <Route
              path="/contact-us/Feedback|query-Form"
              element={<FeedBackForm />}
            />
            <Route
              path="/find-store"
              element={<FindAStore stores={stores} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
