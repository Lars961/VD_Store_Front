import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import {createproduct,editproduct } from "../Service/ProductService";
import { Product } from "./Product";

export default function EditProduct() {
  const URL = "http://localhost:8080/product";

  //let navigate = useNavigate();
  
  const navigate = useNavigate();
  const params = useParams();
  console.log("params:" + params.productId);
  const productId = params.productId;
  

  const [product, setproduct] = useState({
    name: "",
    brand: "",
    productType: "",
    description: "",
  });

  const { name, brand, productType, description } = product;
  
  const typeAction = (e) => {
    console.log("value:" + e.target.value + " ,name:" + e.target.name);
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
    
  };

  useEffect(() => {
    loproduct();
  }, product);

  const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      // 'Authorization':'Bearer ' + this.token
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.put(URL + `/${productId}`, product);
    console.log("product:" + JSON.stringify(product))
    navigate("/");
  };

  const loproduct = async () => {
    const result = await axiosInstance.get(URL + `/${productId}`);
    setproduct(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2 className="text-center m-4"> Ediproduct Form</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Length" className="form-label">
                Brand
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the brand"
                name="brand"
                value={brand}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="text-start mb-3">
              <label className="disabledSelect form-label">
                Type
              </label>
              <select
                id="disabledSelect"
                className="form-select"
                //value={type}
                onChange={(e) => typeAction(e)}
                name="productType"
              >
                <option value="Console" >Console</option>
                <option value="Videogame" >Videogame</option>
                <option value="Product" >Product</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-success mx-2" onSubmit={onSubmit(Product.idProduct)}>
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
