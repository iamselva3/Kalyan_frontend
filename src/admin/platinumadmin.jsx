import React, { useEffect, useState } from 'react';
import Adminnav from './adminnav';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Platinumdadmin = () => {
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "",
    manufacturingDate: "",
    image: null,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProductData({ ...productData, image: files[0] });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  // Add a new product2
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(productData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await axios.post("http://localhost:8000/api/product2", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Product2 added:", response.data);
      navigate("/platinumadmin");
    } catch (error) {
      console.error("Error adding product2:", error.response?.data || error);
    }
  };

  // Table data state
  const [products, setProducts] = useState([]);

  // Fetch all product2s
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/product2");
        setProducts(response.data);
      } catch (error) {
        console.log("Error while fetching product2 data", error);
      }
    };
    fetchData();
  }, []);

  // Delete product2
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/delete/product2/${productId}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.log("Error deleting product2:", error);
    }
  };

  return (
    <div>
      <Adminnav />
      <div style={{ marginLeft: "500px" }}>
        <h2 style={{ color: "#28a745", marginLeft: "10px" }}>Add New Platinum</h2>
        <form
          onSubmit={handleAddProduct}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
            gap: "10px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <label style={{ fontWeight: "bold", color: "black" }}>Product Name:</label>
          <input type="text" name="name" value={productData.name} onChange={handleInputChange} required />

          <label style={{ fontWeight: "bold", color: "black" }}>Price:</label>
          <input type="number" name="price" value={productData.price} onChange={handleInputChange} required />

          <label style={{ fontWeight: "bold", color: "black" }}>Stock:</label>
          <input type="number" name="stock" value={productData.stock} onChange={handleInputChange} required />

          <label style={{ fontWeight: "bold", color: "black" }}>Description:</label>
          <textarea name="description" value={productData.description} onChange={handleInputChange} required />

          <label style={{ fontWeight: "bold", color: "black" }}>Category:</label>
          <input type="text" name="category" value={productData.category} onChange={handleInputChange} required />

          <label style={{ fontWeight: "bold", color: "black" }}>Manufacturing Date:</label>
          <input type="date" name="manufacturingDate" value={productData.manufacturingDate} onChange={handleInputChange} required />

          <label style={{ fontWeight: "bold", color: "black" }}>Product Image:</label>
          <input type="file" name="image" onChange={handleInputChange} required />

          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "10px" }}>
            <button type="submit" style={{ flex: 1, marginRight: "5px", backgroundColor: "#28a745", color: "white", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
              Add Product
            </button>
            <button type="button" onClick={() => navigate("/admin")} style={{ flex: 1, backgroundColor: "#dc3545", color: "white", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className='userTable p-4'>
        <h2 className='mb-4'>Product List</h2>
        <table className='table table-bordered table-striped'>
          <thead className='table-dark'>
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Description</th>
              <th>Category</th>
              <th>Manufacturing Date</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>₹{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.manufacturingDate ? new Date(product.manufacturingDate).toLocaleDateString() : "N/A"}</td>
                  <td>
                    {product.image ? (
                      <img
                        src={`http://localhost:8000${product.image}`}
                        alt="Product"
                        width="60"
                        height="60"
                        style={{ borderRadius: "5px", objectFit: "cover" }}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>
                    <Link to={`/update/product2/${product._id}`} className="btn btn-info btn-sm">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    &nbsp;
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">No products available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Platinumdadmin;
