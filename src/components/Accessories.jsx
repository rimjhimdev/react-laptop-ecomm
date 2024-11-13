import React from "react";
import { accessoriesDatas } from "../data/AccessoriesData"; // Ensure this path is correct
import problem from "../assets/problem.png";
const Accessories = () => {
  console.log(accessoriesDatas); // Check if the data is logged correctly

  // Ensure accessoriesDatas is defined and an array
  if (!accessoriesDatas || accessoriesDatas.length === 0) {
    return <p>No accessories found.</p>; // Handle case where no data exists
  }

  return (
    <div className="accessories">
      <div className="acc-caution">
        <div className="acc-caution-img">
          <img src={problem} alt="" />
        </div>
        <div className="acc-caution-desc">
          <p>
            This section of our company is not yet started for sale. Sorry for
            the inconvience caused. <b>team quantum Development</b>.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="accessory-detail">
          <div className="accessory-outer">
            <div className="accessory-inner">
              <h1>Accessories</h1>
            </div>
            <div className="accessory-cards">
              {accessoriesDatas.map((accessoriesData) => (
                <div key={accessoriesData.id} className="acc-card">
                  <div className="acc-card-img">
                    <img
                      src={accessoriesData.image}
                      alt={accessoriesData.alt}
                    />
                  </div>
                  <div className="acc-card-desc">
                    <h3 className="desc">{accessoriesData.name}</h3>
                    <p className="desc">{accessoriesData.description}.</p>
                    <p className="price">
                      <b>₹{accessoriesData.price}</b>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
