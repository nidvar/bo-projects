import React from 'react'
import { useState } from 'react';

export const CreatePage = () => {

  const [name, setName] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const priceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const imageURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('submitting form');
    if(!name.trim() || !imageURL.trim()) {
      console.error('All fields are required');
      return;
    }
    if(price <= 0) {
      console.error('Price must be greater than zero');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, image: imageURL, price }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        console.error('Failed to create note');
      }
    } catch (error) {
      console.error('Error creating note:', error);
    }
  }

  return (
    <div className='main'>
      <h1 className='title'>Create Page</h1>
      <form className='create-form' onSubmit={handleSubmit}>
          <div className='create-image-container'>
            <img src={imageURL || 'null'} />
          </div>
          <input 
            type="text" 
            placeholder="Image URL"
            onChange={imageURLChange}
          />
          <input 
            type="text" 
            placeholder="Name"
            onChange={nameChange}
          />
          <input 
            type="number" 
            placeholder="Price"
            onChange={priceChange}
          />
          <button type="submit" className='btn'>Create</button>
      </form>
    </div>
  )
}
