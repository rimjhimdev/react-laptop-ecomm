import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ results }) => {
  return (
    <>
      <div className="all-laptops">
        <div className="container">
          {results.length > 0 ? (
            <div className="laptop-list">
              {results.map((laptop) => (
                <Link to={`/laptop/${laptop.id}`} className="details-link">
                  <div className="laptop-card" key={laptop.id}>
                    <div className="all-laptop-img">
                      <img
                        src={laptop.images && laptop.images[0]?.img} // Access only the first image
                        alt={
                          (laptop.images && laptop.images[0]?.alt) ||
                          laptop.name
                        } // Fallback to laptop name if no alt text
                        className="laptop-image"
                      />
                    </div>
                    <div className="all-laptop-desc">
                      <h2>{laptop.name}</h2>
                      <div className="all-laptop-para">
                        <p>{laptop.brand}</p>
                        <p>{laptop.category}</p>
                        <p>₹{laptop.price}</p>
                      </div>
                      <div className="v-m-btn">
                        <Link to={`/laptop/${laptop.id}`}>BUY NOW</Link>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="search-alert">
              <p>No results found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
// import { laptops } from "../data/LaptopData";
{
  /* <div>
      <h2>Search Results</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((laptop) => (
            <li key={laptop.id}>
              <h3>{laptop.name}</h3>
              <p>{laptop.description}</p>
              <p>Price: ${laptop.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div> */
}
