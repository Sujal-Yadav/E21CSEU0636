import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Posts from './Posts'

function App() {
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [top, setTop] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/categories/${categoryName}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
      setData(res.data.products);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log(data)

  return (

    <div className='md:grid md:grid-cols-2 grid grid-cols-2 md:p-4 p-2 lg:grid lg:grid-cols-2'>
      <div>
        <label>Category Name:</label>
        <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
      </div>
      
      <div>
        <label>Top:</label>
        <input type="text" value={top} onChange={(e) => setTop(e.target.value)} />
      </div>
      <div>
        <label>Min Price:</label>
        <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </div>
      <div>
        <label>Max Price:</label>
        <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      <button onClick={handleSearch}>Search</button>
      {data.map((user, index) => (<Posts key={index} availability={user.availability} discount={user.discount} price={user.price} productName={user.productName} rating={user.rating} />))}
    </div>

  )
}

export default App
