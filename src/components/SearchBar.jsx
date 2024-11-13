"use client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import flag from "../assets/flag.png";
import refer from "../assets/refer.png";
import operator from "../assets/operator.png";
import cart from "../assets/shopping-cart.png";
import search_icon from "../assets/search.png";
import { useCartContext } from "../context/CartContext";

const SearchBar = ({ onSearch }) => {
  // const [query, setQuery] = useState("");
  // const [category, setCategory] = useState("");
  // const navigate = useNavigate();

  // function handleSearch(e) {
  //   e.preventDefault();
  //   navigate(`/search?query=${query}`);
  // navigate(`/search?query=${query}&category=${category}`);

  const { total_item } = useCartContext();

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
    navigate("/result");
  };
  // // Handle form submission
  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  //   if (searchQuery.trim() !== "") {
  //     navigate(`/results?query=${encodeURIComponent(searchQuery)}`);
  //   }
  // };

  return (
    <>
      <div className="fixed-head bg-white">
        <div className="header">
          <div className="container">
            <div className="head-content">
              <div className="nav-left">
                <div className="company-logo">
                  <Link to="/">
                    ℚ𝕌𝔸ℕ𝕋𝕌𝕄
                    <span>.in</span>
                  </Link>
                </div>
                <div className="language-preferred">
                  <div className="ind-flag">
                    <img src={flag} alt="" />
                  </div>
                  <div className="lang">
                    <p>EN - IND</p>
                  </div>
                </div>
              </div>

              <div className="nav-center">
                <div className="search-nav">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Search laptops by name, category, or description..."
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit">
                      <img src={search_icon} alt="" />
                      {/* search */}
                    </button>
                  </form>
                </div>
              </div>

              <div className="nav-right">
                <div className="right-section">
                  <div className="right-section-bar" id="sign-in">
                    <Link to="/sign-in">
                      <div className="r-s-b-img">
                        <img src={refer} alt="" />
                      </div>
                      <div className="r-s-b-text">
                        <p>sign-in</p>
                      </div>
                    </Link>
                  </div>
                  <div className="right-section-bar" id="cart">
                    <Link to="/cart">
                      <div className="r-s-b-img">
                        <img src={cart} alt="" />
                      </div>
                      <div className="r-s-b-text">
                        <p>cart</p>
                      </div>
                      <div className="r-s-b-img-count">
                        <p>{total_item}</p>
                      </div>
                    </Link>
                  </div>
                  <div className="right-section-bar" id="contact-us">
                    <Link to="/contact-us">
                      <div className="r-s-b-img">
                        <img src={operator} alt="" />
                      </div>
                      <div className="r-s-b-text">
                        <p>contact us</p>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* link tag ke andar component pass krna hai */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
