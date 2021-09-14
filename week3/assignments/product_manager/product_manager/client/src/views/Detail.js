import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { useHistory } from 'react-router';
    
const Detail = (props) => {
    const history = useHistory();
    const [product, setProduct] = useState({})
    const { id } = useParams();

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
            })
            .catch(err => console.error(err));
            history.push("/products")
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button>
        </div>
    )
}
    
export default Detail;

