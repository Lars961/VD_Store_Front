import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { loadproduct, createproduct, deleteproduct } from '../Service/ProductService';

const deleteAction = (id) =>{
    deleteproduct(id)
    window.location.reload();
}

export const  ProductList=() => {

    const [products, setproducts] = useState([])

    // eslint-disable-next-line no-unused-vars
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const result = loadproduct().then(data => {
                    console.log('fetchData');
                    console.log(data);
                    setproducts(data);
                    
                });
                
           }catch(error){
            console.error(error);
           }
        };
        fetchData();
    }, [setproducts]);

        /*const axiosInstance = axios.create({
        headers: {
            "Access-Control-Allow-Origin": "*",
           // 'Authorization':'Bearer ' + this.token
        }
    });*/
    
    
    console.log(products);
    if (!!products.length){
    return (
        <div className="container">
            <Link type="button" className="btn btn-outline-primary mx-2" to={'/product'}>Create</Link>
            <div className="py-4">

                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{product.idProduct}</td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.type}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <Link type="button" className="btn btn-outline-primary mx-2" to={`/viewproduct/${product.idProduct}`}>View</Link>
                                        <Link type="button" className="btn btn-outline-warning mx-2" to={`/editproduct/${product.idProduct}`}>Edit</Link>
                                        <button className="btn btn-outline-danger mx-2" onClick={() => deleteAction(product.idProduct)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>

        </div>
    )}
    else {
        return (<div className="container">
        <Link type="button" className="btn btn-outline-primary mx-2" to={'/product'}>Create</Link>
        <div className="py-4">
            'No data' 
            
            </div>
            </div>
            )
        
    }
}