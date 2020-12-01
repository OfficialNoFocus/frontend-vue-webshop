<script>
import axios from 'axios';
export default {
  name: 'Create',
  data () {
    return {
      name: '',
      price: null,
      weight: null,
      stock: null,
      descriptions: ''
    }
  },
  methods: {
    formSubmit(e) {
        e.preventDefault();
        axios
        .post('http://localhost/api/products', {
            name: this.name,
            price: this.price,
            weight: this.weight,
            stock: this.stock,
            descriptions: this.descriptions
        })
        .then(response => (console.log(response.data)))
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
        }
    }
}
</script>
<template>
    <div>
        <div class="row mx-0 my-2 p-2 border-bottom">
            <div class="col-lg-12">
                <h4 class="form-header">Nieuw Product</h4>
            </div>
            <form @submit="formSubmit">
            <div class="col-lg-12">
                <div class="form-row mx-0">
                    <div class="form-group col-12">
                        <strong class="text-left">Name:</strong>
                        <input type="text" class="form-control" v-model="name">
                    </div>
                    <div class="form-group col-12">
                        <strong class="text-left">Price:</strong>
                        <input type="number" class="form-control" v-model="price">
                    </div>
                    <div class="form-group col-12">
                        <strong class="text-left">Weight:</strong>
                        <input type="number" class="form-control" v-model="weight">
                    </div>
                    <div class="form-group col-12">
                        <strong class="text-left">Voorraad:</strong>
                        <input type="number" class="form-control" v-model="stock">
                    </div>
                    <div class="form-group col-12">
                        <strong class="text-left">Omschrijving:</strong>
                        <input type="text" class="form-control" v-model="descriptions">
                    </div>
                </div>
            </div>
            <button class="btn btn-primary">Add Product</button>
            </form>
        </div>
    </div>
</template>