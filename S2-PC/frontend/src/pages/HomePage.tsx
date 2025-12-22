import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";

import type { ProductType } from "../types";

export const Homepage = () => {

  const [data, setData] = useState<ProductType[]>([]);

  const grabData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/all');
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    grabData();
  }, []);

  return (
    <div className="main">
      <div className="products-container">
        {
          data.length > 0 ? data.map((item, index) => {
              return (<ProductCard key={index} product={item}/>)
          }): <p>Loading...</p> 
        }
      </div>
    </div>
  )
}
