import axios from 'axios';

export const getProducts = async () => {
    let products = [];
    axios.get("http://localhost/api/products" , {
            headers: {
            "Content-Type": "application/json",
            }
        })
        .then(response => {
            products = response.data;
            console.log(products);
        })
       .catch(function (error) {
             console.log(error);
        });
        return products;
 }

 export const removeProduct = product => {
    axios.delete("http://localhost/api/products/" + product.id)
        .then(function(){
            location.reload();
        })
        .catch(function(error) {
            console.log(error); 
        });
    }
 