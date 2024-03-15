import  { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    axios.get('http://localhost:8000/api/v1/products/get-all')
      .then(response => {
        // Set the products state with the fetched data
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array to execute the effect only once when the component mounts

  console.log(products)
  return (
    <div>
      <h2>Product List</h2>
      <ul>
      <div className="grid grid-cols-3 gap-4">
  {products.map(product => (
    <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold">Price: ${product.price}</p>
      <img className="h-64 w-full object-cover mt-2" src={product.photo} alt={product.name} />
      {/* You can add more details here if needed */}
    </div>
  ))}
</div>

      </ul>
    </div>
  );
};

export default HomePage;
