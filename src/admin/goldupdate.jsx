import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./update.css"

const Updateproduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "",
    manufacturingDate: ""
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setPreview(`http://localhost:8000${response.data.image}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const fileHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("stock", product.stock);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("manufacturingDate", product.manufacturingDate);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(`http://localhost:8000/api/update/product/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/admin");
    } catch (error) {
      console.log("Error updating product:", error);
    }
  };

  return (
    <div className="update-container">
  
      <form className="update-form" onSubmit={submitForm}>
        <h2 className="update-heading">Update Product</h2>
  
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={inputHandler} className="update-input" />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={inputHandler} className="update-input" />
        <input type="number" name="stock" placeholder="Stock Quantity" value={product.stock} onChange={inputHandler} className="update-input" />
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={inputHandler} className="update-input" />
        <textarea name="description" placeholder="Description" value={product.description} onChange={inputHandler} className="update-input" style={{ height: "80px" }} />
        <input type="date" name="manufacturingDate" value={product.manufacturingDate?.split("T")[0]} onChange={inputHandler} className="update-input" />
  
        <input type="file" name="image" accept="image/*" onChange={fileHandler} className="update-file-input" />
  
        {preview && <img src={preview} alt="Preview" className="update-image-preview" />}
  
        <button type="submit" className="update-button">Update Product</button>
      </form>
    </div>
  );
};

// Styles (same as before, with textarea tweak)

export default Updateproduct;
