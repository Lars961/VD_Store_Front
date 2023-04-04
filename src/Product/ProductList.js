import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

export const  ProductList=() => {

    const [product, setproduct] = useState([])

    // eslint-disable-next-line no-unused-vars
    const {id} = useParams()

    useEffect(() => {
        loadproduct();
    }, []);

        const axiosInstance = axios.create({
        headers: {
            "Access-Control-Allow-Origin": "*",
           // 'Authorization':'Bearer ' + this.token
        }
    });
    
    const loadproduct = async () => {
        const result = await axiosInstance.get('http://localhost:8080/product/vdProduct' )
        setproduct(result.data);
    }

    const deleteproduct = async (id) => {
        await axios.delete(`http://localhost:8080/product/{productId}`)
        loadproduct()
    }

    return (
        <div className="container">

            <div className="py-4">

                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product.map((product, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{product.Name}</td>
                                    <td>{product.Brand}</td>
                                    <td>{product.Type}</td>
                                    <td>
                                        <Link type="button" className="btn btn-outline-primary mx-2" to={`/viewproduct/${product.id}`}>View</Link>
                                        <Link type="button" className="btn btn-outline-warning mx-2" to={`/editproduct/${product.id}`}>Edit</Link>
                                        <button className="btn btn-outline-danger mx-2" onClick={() => deleteproduct(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>

        </div>
    )
}