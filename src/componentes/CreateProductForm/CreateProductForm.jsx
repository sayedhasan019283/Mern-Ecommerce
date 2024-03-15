import  { useState } from 'react';
import axios from 'axios';

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    quantity: '',
    photo: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('category', formData.category);
    form.append('quantity', formData.quantity);
    form.append('photo', formData.photo);

    try {
      const response = await axios.post('http://localhost:8000/api/v1/products/create-product', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product created successfully:', response.data.product);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} required />
      </div>
      <button  type="submit">Create Product</button>
    </form>
  );
};

export default CreateProductForm;
