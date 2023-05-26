import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import {createproduct,editproduct } from "../Service/ProductService";

export default function EditProduct() {
  const URL = "http://localhost:8080/product";

  //1. Generamos estados de las variables del objeto
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  console.log("params:" + params.productId);
  const productId = params.productId;

  const nameAction = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const brandAction = (event) => {
    console.log(event.target.value);
    setBrand(event.target.value);
  };

  const typeAction = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
  };

  const descriptionAction = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };

  const EditAction = (event /*  name, brand, type, description*/) => {
    event.preventDefault();
    //4. construccion del objeto
    const product = {
      name: name,
      brand: brand,
      type: type,
      description: description,
    };

    EditProduct(product).then((result) => {
        console.log(result);
        navigate("/");
      });
    };

 /* const onInputChange = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };*/

 /* useEffect(() => {
    loproduct();
  }, []);*/

  const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      // 'Authorization':'Bearer ' + this.token
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.put(URL + `/${productId}`);
    navigate("/");
  };

 /* const loproduct = async () => {
    const result = await axiosInstance.get(URL + `/${productId}`,product);
    setproduct(result.data);
  };*/

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
                onChange={nameAction}
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
                onChange={brandAction}
              />
            </div>

            <div className="text-start mb-3">
              <label className="disabledSelect form-label">
                Type
              </label>
              <select
                id="disabledSelect"
                className="form-select"
                
              >
                <option>Console</option>
                <option>Videogame</option>
                <option>Product</option>
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
                onChange={descriptionAction}
              />
            </div>

            <button type="submit" className="btn btn-outline-success mx-2">
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
