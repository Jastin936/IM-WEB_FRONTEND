// Products.js
import React from "react";
import { productsData } from "../../constants"; // You'll need to define this

const Products = () => {
  return (
    <div className="container mx-auto bg-[#262626] p-4 rounded-lg mt-6">
      <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">Products</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[#f5f5f5]">
          <thead className="bg-[#333] text-[#ababab]">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product, index) => (
              <tr key={index} className="border-b border-gray-600 hover:bg-[#333]">
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">₹{product.price}</td>
                <td className="p-4">{product.stock}</td>
                <td className={`p-4 ${product.stock > 0 ? "text-green-400" : "text-red-400"}`}>
                  {product.stock > 0 ? "Available" : "Out of Stock"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
