<script>
import axios from 'axios';
import * as API from '../helpers/api.js';
export default {
  name: 'Frontpage',
  data() {
    return {
      products: []
    }
  },
  created(){
      let products = [];
    axios.get("http://localhost/api/products" , {
            headers: {
            "Content-Type": "application/json",
            }
        })
        .then(response => {
            this.products = response.data;
            // console.log(this.products);
        })
       .catch(function (error) {
             console.log(error);
        });
        return products;
  },
  methods: {
      removeProduct: product => {
        API.removeProduct(product)
      }
  }
};
</script>
<template>
  <div>
    <table class="table table-responsive-sm">
    <thead>
    <tr>
        <th scope="col">Naam</th>
        <th scope="col">Prijs</th>
        <th scope="col">Gewicht</th>
        <th scope="col">Omschrijving</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(product, index) in products"
    :key="index"> 
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.weight}}</td>
        <td>{{product.descriptions}}</td>
        <td><button @click="removeProduct(product)">DELETE</button></td>
    </tr>
    </tbody>
    </table>
  </div>
</template>
<style>
body{
    background-color: #4a4a4a;
}
th, th .btn {
    border-top: 0!important;
    border-bottom: 0!important;
    padding-top: 1.5em!important;
}
table {
    max-width: 1344px;
    margin: 0 auto;
}
td {
    background-color: #fff;
}
.btn.btn-create:hover {
    color: #fff;
}
</style>