<template >
  <div class="box box-primary">
      <div class="error" v-if="errors.length">
          <div class="alert alert-danger">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <span v-for="err in errors">
             {{ err }}
            </span>
          </div>
      </div>
      <div class="box-header with-border">
        <h3 class="box-title">Danh sách Hoa</h3>
        <hr>
        <router-link :to="{ name: 'create' }"><a href="javascript:;" class="btn btn-success" ><span class="glyphicon glyphicon-plus"></span>Add</a></router-link>
        
      </div>
        <!-- /.box-header -->
        <div class="box-body">

          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên Hoa</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Date created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             <tr v-for="(prod, index) in list_products">
              <td>{{ prod.id }}</td>
              <td v-if="!prod.isEdit">
                {{ prod.name }}
              </td>
              <td v-else>
                <input type="text" class="form-control" v-model="prod.name">
              </td>
              <td v-if="!prod.isEdit">
                {{ prod.price }}
              </td>
              <td v-else>
                <input type="text" class="form-control" v-model.number="prod.price">
              </td>
              <td v-if="!prod.isEdit">
                {{ prod.count }}
              </td>
              <td v-else>
                <input type="text" class="form-control" v-model.number="prod.count">
              </td>
              <!-- <td>{{ prod.created_at }}</td> -->
              <td>{{ prod.created_at }}</td>
              <td v-if="!prod.isEdit">
                <button class="btn btn-success" @click="prod.isEdit = true"><i class="fa fa-pencil"></i> Edit</button>
                <button class="btn btn-danger" @click="deleteProduct(prod, index)"><i class="   fa fa-trash"></i> Delete</button>
              </td>
              <td v-else>
                <button class="btn btn-primary" :infoProduct="getProductInfo"><i class="fa fa-check-square"></i> Save</button>
                <button class="btn btn-danger" @click="prod.isEdit = false">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <!-- /.box-body -->
        <div class="box-footer clearfix">
          <ul class="pagination pagination-sm no-margin pull-right">
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&raquo;</a></li>
          </ul>
        </div> 
  </div>
</template>

<script>
	// import moment from 'moment'
  // Vue.use(require('vue-moment'));
  export default {
   data() {
    return {
      product: {
        name: '',
        price: 0,
        count: 0,
      },
      errors: [],
      list_products: []
    }
  },
  created() {
    this.getListProducts()
  },
  computed: {
    // tuong tu method nhung khong co tham so truyen vao, khi goi k co ()
  },
  methods: {
    gotoIndex(){
        this.$router.push({ name: "index"})
    },
    getListProducts() {
      axios.get('/admin/api/v1/products')
      .then(response => {
        this.list_products = response.data
        this.list_products.forEach(item => {
          Vue.set(item, 'isEdit', false)
        })
      })
      .catch(error => {
        this.errors = error.response.data.errors.name
      })
    },
    updateProduct(product) {
      axios.put('/admin/api/v1/products/' + product.id, {name: product.name, price: product.price, count: product.count})
      .then(response => {
        console.log(response.data.result)
        product.isEdit = false
      })
      .catch(error => {
        this.errors = error.response.data.errors.name
      })
    },
    deleteProduct(product, index) {
      axios.delete('/admin/api/v1/products/' + product.id)
        .then(response => {
          console.log(response.data.result)
          this.list_products.splice(index, 1)
          // this.gotoIndex();
        })
        .catch(error => {
          this.errors = error.response.data.errors.name
        })
      
    },
    getProductInfo() {
      axios.delete('/admin/api/v1/products/' + product.id)
      .then(response => {
        console.log(response.data.result)
        this.list_products.splice(index, 1)
        // this.gotoIndex();
      })
      .catch(error => {
        this.errors = error.response.data.errors.name
      })
    }
  }
}
</script>

<!-- <style lang="scss" scoped>
.error {
 span {
   color: red;
 }
}
</style> -->