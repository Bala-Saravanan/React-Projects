import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Product from "./components/Products/Product";
import SideBar from "./components/Sidebar/SideBar";
import data from "./components/db/data";

function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  const handleClick = (event) => {
    setSelected(event.target.value);
  };

  const filteredItems = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const findProduct = (products, selected, query) => {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected && selected !== "all") {
      filteredProducts = filteredProducts.filter(
        ({ category, color, newPrice, company }) => {
          return (
            category.toLowerCase() === selected ||
            color.toLowerCase() === selected ||
            newPrice.toLowerCase() === selected ||
            company.toLowerCase() === selected
          );
        }
      );
    }
    return filteredProducts;
  };

  const result = findProduct(data, selected, query);

  return (
    <>
      <Navigation handleChange={handleChange} />
      <div className="flex">
        <SideBar handleSelect={handleSelect} />

        <Product result={result} handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
