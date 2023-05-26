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


export const createproduct = async (product) => {
    const result = await axiosInstance.post('http://localhost:8080/product/product/new', product)
    console.log(result);
    return result;
    //setproduct(product.data);
    //console.log(product);
}

export const editproduct = async(productId, product) => {
    const result = await axiosInstance.put('http://localhost:8080/product/' + productId, product)
    console.log(result);
    return result;

}

export const getproduct = async (id) => {
    console.log('getproduct' + id);
    const result = await axios.get('http://localhost:8080/product/'+ id)
    
    //loadproduct()
    return result;
}


export const deleteproduct = async (id) => {
    console.log('deleteproduct' + id);
    const result = await axios.delete('http://localhost:8080/product/'+ id)
    
    //loadproduct()
    return result;
}