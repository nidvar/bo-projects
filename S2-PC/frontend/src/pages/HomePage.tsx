import { useState, useEffect } from "react";
import type { ProductType } from "../types";

export const Homepage = () => {

  const [data, setData] = useState<ProductType[]>([]);

  const grabData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/all');
      const data = await response.json();
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
          data ? data.map((item, index) => {
            return <div key={index} className="product-card">
              <img src={item.image} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          }) : <p>Loading...</p>
        }
      </div>
    </div>
  )
}
