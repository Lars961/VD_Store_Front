import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
       // 'Authorization':'Bearer ' + this.token
    }
});

export const loadproduct = async () => {
    const result = await axiosInstance.get('http://localhost:8080/product/vdProduct')
    console.log(result);
    return result.data;
    //setproduct(result.data);
    //console.log(product);
}


export const createproduct = async () => {
    const newProduct = await axiosInstance.post('http://localhost:8080/product/new')
    console.log(newProduct);
    return newProduct;
    //setproduct(product.data);
    //console.log(product);
}


export const deleteproduct = async (id) => {
    console.log('deleteproduct' + id);
    const result = await axios.delete('http://localhost:8080/product/'+ id)
    
    //loadproduct()
    return result;
}