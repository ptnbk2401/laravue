<template>
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
          <h3 class="box-title">Thêm sản phẩm</h3>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form role="form" method="post" >
          <div class="box-body">
            <div class="form-group " >
              <label for="name">Tên Hoa</label>
              <input type="text" class="form-control" v-model="product.name" placeholder="Tên Hoa" >
            </div>
            <div class="form-group">
              <label for="price">Giá</label>
              <input type="number" class="form-control" v-model.number="product.price"  id="price" placeholder="Giá">
            </div>
            <div class="form-group">
              <label for="count">Số lượng</label>
              <input type="number" class="form-control" id="count" v-model.number="product.count" placeholder="Số lượng">
            </div>
          </div>
          <!-- /.box-body -->

          <div class="box-footer">
            <button type="button" class="btn btn-primary" @click="createProduct()">Submit</button>
            <router-link :to="{ name: 'index' }">
                <button type="button" class="btn btn-danger">Back</button>
            </router-link>
          </div>
        </form>
      </div>
    <!-- /.box -->
</template>

<script>
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
  computed: {
    // tuong tu method nhung khong co tham so truyen vao, khi goi k co ()
  },
  methods: {
    gotoIndex(){
        this.$router.push({ name: "index"})
    },
    createProduct() {
      this.errors = []
      axios.post('/api/v1/products', {name: this.product.name, price: this.product.price, count: this.product.count})
      .then(response => {
        console.log(response.data.result)
        this.gotoIndex();
      })
      .catch(error => {
        this.errors = []
        if(error.response.data.errors.name) {
          this.errors.push(error.response.data.errors.name)
        }
        if(error.response.data.errors.price) {
          this.errors.push(error.response.data.errors.price)
        }
        if(error.response.data.errors.count) {
          this.errors.push(error.response.data.errors.count)
        }
      })
    },    
  }
}
</script>
 
<style lang="scss" scoped>
    
</style>