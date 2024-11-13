import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// function searchStore() {
//   const query = document.getElementById("searchInput").value.toLowerCase();
//   const storeResults = document.getElementById("storeResults");
//   storeResults.innerHTML = ""; // Clear previous results

//   // Filter stores based on search query
//   const filteredStores = stores.filter((store) =>
//     store.name.toLowerCase().includes(query)
//   );

//   // Display each store in a container
//   filteredStores.forEach((store) => {
//     const storeContainer = document.createElement("div");
//     storeContainer.classList.add("store-container");
//     storeContainer.textContent = store.name;

//     // Make container clickable to navigate to the store's page
//     storeContainer.onclick = () => {
//       window.location.href = store.url;
//     };

//     storeResults.appendChild(storeContainer);
//   });

//   // If no stores are found, display a message
//   if (filteredStores.length === 0) {
//     storeResults.innerHTML =
//       "<p>No stores found. Try a different search.</p>";
//   }
// }
