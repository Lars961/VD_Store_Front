import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { createproduct} from '../Service/ProductService';



export const  Product=() => {

    //1. Generamos estados, [mivariable, mimetodo]
    const [name,setName] = useState("")
    const [brand,setBrand] = useState("")
    const [type,setType] = useState("")
    const [description,setDescription] = useState("")

    //2. Creamos los eventos de mis campos a asignar
const nameAction = (event) =>{

    console.log(event.target.value);
    setName(event.target.value);
}

const brandAction = (event) =>{

    console.log(event.target.value);
    setBrand(event.target.value);
}

const typeAction = (event) =>{

    console.log(event.target.value);
    setType(event.target.value);
}

const descriptionAction = (event) =>{

    console.log(event.target.value);
    setDescription(event.target.value);
}
//Generamos el objeto a guardar
const createAction = (event/*  name, brand, type, description*/) =>{
   event.preventDefault();
    const product = {
        name: name,
        brand: brand,
        type: type,
        description: description
    }
    createproduct(product).then(result =>{
        console.log(result)
    })
}
    return (
       
       <div className="p-3 mb-2 bg-light text-dark container">
            <div className="py-4">
                {/*onSubmit sirve para mandar la informacion del formulario al endpoint */}
            <form onSubmit={createAction}> 
            'hello product!'
                <div class= "border-1 text-start form-group">
                    <label for = "inputName col-md-6  ">Name</label>
                    <input type="for-label" class="form-control" id="inputName" placeholder="" onChange={nameAction}/>
                </div>
                <div class= "text-start form-group">
                    <label for = "inputBrand col-md-6  ">Brand</label>
                    <input type="for-label" class="form-control" id="inputBrand" placeholder="" onChange={brandAction}/>
                </div>
                <div class="text-start mb-3">
                    <label for="disabledSelect" class="form-label">Type</label>
                    <select id="disabledSelect" class="form-select" onChange={typeAction}>
                        <option>Console</option>
                        <option>Videogame</option>
                        <option>Product</option>
                    </select>
                </div>
                <div class="text-start mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={descriptionAction}></textarea>
                </div>
                <button type="sumbit" class="btn btn-success">Save</button>
            </form>
            </div>
            </div>

    );
};


