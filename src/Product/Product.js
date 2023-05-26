import React, { useState } from "react";
import { createproduct,editproduct } from "../Service/ProductService";
import { useNavigate, useParams } from "react-router-dom";


export const Product = () => {
  //1. Generamos estados, [mivariable, mimetodo]
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [productType, setProductType] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  console.log("params:" + params.productId);
  const productId = params.productId;
//modificar los estados de las variables del objeto y obtener el product de mi endpoint
if(!!productId){

}

  //2. Creamos los eventos de mis campos a asignar
  //setteamos el valor de las constantes
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
    setProductType(event.target.value);
  };

  const descriptionAction = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };
  //3. Generamos el objeto a guardar

  const createAction = (event /*  name, brand, type, description*/) => {
    event.preventDefault();
    //4. construccion del objeto
    const product = {
      name: name,
      brand: brand,
      productType: productType,
      description: description,
    };
    createproduct(product).then((result) => {
      console.log(result);
      navigate("/");
    });
  };

  const editAction = (event) => {
    event.preventDefault();
    //4. construccion del objeto
    const product = {
      name: name,
      brand: brand,
      productType: productType,
      description: description,
    };
    editproduct(productId, product).then((result) => {
      console.log(result);
      //navigate("/");
    });
  };
  //setear la funcion createACtion o editAction

 let onSubmit = null;
  if (!productId) {
    onSubmit = createAction;
  }
  else {
    onSubmit = editAction;
  }

  return (
    <div className="p-3 mb-2 bg-light text-dark container">
      <div className="py-4">
        {/*onSubmit sirve para mandar la informacion del formulario al endpoint */}
        <form onSubmit={onSubmit}>
          'hello product!'
          <div className="border-1 text-start form-group">
            <label className="inputName col-md-6  ">Name</label>
            {/* onChange sirve para asignar la accion al campo y asignamos el valor de nuestro estado*/}
            <input
              type="for-label"
              className="form-control"
              id="inputName"
              placeholder=""
              onChange={nameAction}
            />
          </div>
          <div className="text-start form-group">
            <label className="inputBrand col-md-6  ">Brand</label>
            <input
              type="for-label"
              className="form-control"
              id="inputBrand"
              placeholder=""
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
              onChange={typeAction}
            >
              <option>Console</option>
              <option>Videogame</option>
              <option>Product</option>
            </select>
          </div>
          <div className="text-start mb-3">
            <label className="exampleFormControlTextarea1 form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={descriptionAction}
            ></textarea>
          </div>
          <button type="sumbit" className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
