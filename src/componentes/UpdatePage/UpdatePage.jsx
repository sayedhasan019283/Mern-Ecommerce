/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const UpdatePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: '',
    category: '',
    price: 0,
  });
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log('id :',id);
  console.log(product)



   useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/products/get-one/${id}`, { headers: { 'Cache-Control': 'no-cache' } })
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(id)
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/v1/products/update/${id}`, formData);
      alert('Product updated successfully');
      navigate('/home')

      // Optionally, you can redirect the user to another page or update the state
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    }
  };

  return (
    <div>
       <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="description"
      />
      <textarea
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="category"
      />
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="quantity"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <button type="submit">Update Product</button>
    </form>
    </div>
  );
};

export default UpdatePage;
