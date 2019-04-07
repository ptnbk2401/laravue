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
              <tr>
                <td><input type="text" v-model="product.id" ></td>
                <td><input type="text" ></td>
                <td><input type="text" ></td>
                <td><input type="text" ></td>
                <td><input type="text" ></td>
                <td></td>
              </tr>
             <tr v-for="(prod, index) in list_products">
              <td>{{ prod.id }}</td>
              <td>
                {{ prod.name }}
              </td>
              
              <td>
                {{ prod.price }}
              </td>
              
              <td >
                {{ prod.count }}
              </td>

              <td>{{ prod.created_at | moment('DD/MM/YYYY') }}</td>

              <td>
                <router-link :to="{name: 'edit', params: {id: prod.id}}">
                  <button class="btn btn-success"><i class="fa fa-pencil"></i> Edit</button>
                </router-link>
                
                <button class="btn btn-danger" @click="deleteProduct(prod, index)"><i class="   fa fa-trash"></i> Delete</button>
              </td>              
            </tr>
          </tbody>
        </table>
        </div>
        
        <!-- /.box-body -->
        <!-- <div class="box-footer clearfix">
          <ul class="pagination pagination-sm no-margin pull-right">
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&raquo;</a></li>
          </ul>
        </div>  -->
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueMoment from 'vue-moment';

  Vue.use(VueMoment)
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
      axios.get('/api/v1/products')
      .then(response => {
        this.list_products = response.data
      })
      .catch(error => {
        this.errors = error.response.data.errors.name
      })
    },
    deleteProduct(product, index) {
      if (confirm("Do you really want to delete it?")) {
        axios.delete('/api/v1/products/' + product.id)
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
}
</script>

<!-- <style lang="scss" scoped>
.error {
 span {
   color: red;
 }
}
</style> -->