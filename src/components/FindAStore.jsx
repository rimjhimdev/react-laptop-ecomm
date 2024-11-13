import React, { useState } from "react";
import { Link } from "react-router-dom";
import kolkata from "../assets/images/kolkata.jpg";
import delhi from "../assets/images/delhi.jpg";
import mumbai from "../assets/images/mumbai.jpg";
import chennai from "../assets/images/chennai.jpg";
import bihar from "../assets/images/bihar.jpg";
// import defaultImage from "../assets/images/default.jpg";

const FindAStore = ({ stores }) => {
  const [query, setQuery] = useState("");
  const [filteredStores, setFilteredStores] = useState([]);

  const searchStore = () => {
    const results = stores.filter((store) =>
      store.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStores(results);
  };
  return (
    <>
      <div className="store-main">
        <div class="mid-title-bg">
          <div class="m-t-image" id="find-store-bg"></div>
          <div class="m-t-text position-text">
            <h1>Find a Store</h1>
          </div>
        </div>

        <div className="container">
          <div className="store-sec-1">
            <div className="heading">
              <h1>Welcome to Quantum's Find a Store</h1>
            </div>

            <main className="main-body-store">
              <div className="searchContainer">
                <h2>Find Nearest Store in Bhopal</h2>
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!query.trim()) {
                      alert("Please enter a store name.");
                      return;
                    }
                    searchStore();
                  }}
                >
                  <div className="store-searchbar">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="searchInput"
                      placeholder="Enter store name"
                    />
                  </div>
                  <div className="store-searchbtn">
                    <button
                      className="button"
                      // onClick={searchStore}
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>

              <div className="storeResults">
                {/* {filteredStores == "" ? ( */}
                {filteredStores.map((store) => (
                  <div
                    key={store.id} // Use store.id as the key
                    className="storeContainer"
                    onClick={() => (window.location.href = store.url)}
                  >
                    <p>{store.name}</p>
                  </div>
                ))}
                {/* ) : ( */}
                {/* <div className="storeContainerAlert">
                  <p>No stores found. Try a different search.</p>
                </div> */}
                {/* )} */}
              </div>
            </main>
          </div>

          <div className="store-sec-2">
            <div className="store-heading-2">
              <h1>View City</h1>
            </div>
            <div className="store-galleryContainer">
              <div className="galleryGrid">
                <div className="galleryItem">
                  <Link
                    to={
                      "https://www.hpworldstores.in/hp-world-velocity-exclusive-store-laptop-store-chandni-chowk-kolkata-621/Home"
                    }
                  >
                    <div className="galleryItem-img">
                      <img src={kolkata} alt="Kolkata Store" />
                    </div>
                    <div className="galleryItem-p">
                      <p>Kolkata Store</p>
                    </div>
                  </Link>
                </div>
                <div className="galleryItem">
                  <Link
                    to={
                      "https://www.hpworldstores.in/hp-world-computer-land-laptop-store-nehru-place-new-delhi-633/Home"
                    }
                  >
                    <div className="galleryItem-img">
                      <img src={delhi} alt="Delhi Store" />
                    </div>
                    <div className="galleryItem-p">
                      <p>Delhi Store</p>
                    </div>
                  </Link>
                </div>
                <div className="galleryItem">
                  <Link
                    to={
                      "https://www.hpworldstores.in/hp-world-micron-computer-kandivali-west-mumbai-1470/Home"
                    }
                  >
                    <div className="galleryItem-img">
                      <img src={mumbai} alt="Mumbai Store" />
                    </div>
                    <div className="galleryItem-p">
                      <p>Mumbai Store</p>
                    </div>
                  </Link>
                </div>
                <div className="galleryItem">
                  <Link
                    to={
                      "https://www.hpworldstores.in/hp-world-it-world-laptop-store-t-nagar-chennai-778/Home"
                    }
                  >
                    <div className="galleryItem-img">
                      <img src={chennai} alt="Delhi Store" />
                    </div>
                    <div className="galleryItem-p">
                      <p>Chennai Store</p>
                    </div>
                  </Link>
                </div>
                <div className="galleryItem">
                  <Link
                    to={
                      "https://www.hpworldstores.in/hp-world-the-computer-bihar-bhagalpur-812001/Home"
                    }
                  >
                    <div className="galleryItem-img">
                      <img src={bihar} alt="bihar Store" />
                    </div>
                    <div className="galleryItem-p">
                      <p>Bihar Store</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindAStore;
