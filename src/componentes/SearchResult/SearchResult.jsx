import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/Auth";

const SearchResult = () => {
    const [auth] = useAuth();
    const { keyword } = useParams();
    const [reloadKey, setReloadKey] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`http://localhost:8000/api/v1/products/search/${keyword}`)
        .then(response => {
            setData(response.data.matchingDocuments);
            console.log(response.data.matchingDocuments)
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
          setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    fetchData();
  }, [reloadKey, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if data is empty or undefined
  if (!data || data.length === 0) {
    return <div>No search results found.</div>;
  }
  console.log(data)

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/products/delete/${id}`);
      setReloadKey(prevKey => prevKey + 1);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <div>
    <h2>Product List</h2>
    <ul>
      <div className="grid grid-cols-3 gap-4">
        {data.map(product => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-bold">Price: ${product.price}</p>
            <img className="h-64 w-full object-cover mt-2" src={product.photo} alt={product.name} />
            {
              auth?.user?.role === 1 ? (
                <div>
                  <button className="btn text-black mr-56 ml-3" onClick={() => deleteProduct(product._id)}>Delete</button>
            <NavLink
                to={`/${product._id}`}
                className="btn text-black"
                
              >
                Edit
          </NavLink>
                </div>
              ) : (
                <div>
                  <NavLink>Add To Cart</NavLink>
                </div>
              )
            }
          </div>
        ))}
      </div>
    </ul>
  </div>
  );
};

export default SearchResult;
