import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../features/products/productSlice"; // to be created
import "./Inventory.css";


export default function Inventory() {
  const products = useSelector((state) => state.products.items);
  
  const dispatch = useDispatch();
const [showForm, setShowForm] = useState(false);
const [newProduct, setNewProduct] = useState({
  name: "",
  description: "",
  price: "",
  image: "",
  quantity: 1,
});


  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="inventory-page">
      <h2>📦 Inventory Management</h2>
      <button className="add-btn"
               onClick={() => setShowForm(true)}>+ Add Product</button>
      {showForm && (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      dispatch(addProduct({ ...newProduct, id: Date.now() }));
      setShowForm(false);
      setNewProduct({ name: "", description: "", price: "", image: "", quantity: 1 });
    }}
    className="add-form"
  >
    <input
      type="text"
      placeholder="Product Name"
      value={newProduct.name}
      required
      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
    />
    <input
      type="text"
      placeholder="Description"
      value={newProduct.description}
      onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
    />
    <input
      type="number"
      placeholder="Price"
      value={newProduct.price}
      required
      onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
    />
    <input
      type="text"
      placeholder="Image URL"
      value={newProduct.image}
      required
      onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
    />
    <input
      type="number"
      min="1"
      value={newProduct.quantity}
      onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
    />
    <button type="submit">Add</button>
  </form>
)}

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.name} width="50" /></td>
              <td>{product.name}</td>
              <td>{product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>🗑 Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
