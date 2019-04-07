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
          <h3 class="box-title">Edit sản phẩm</h3>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form role="form" v-on:submit="updateProduct(product)" >
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
            <!-- <button type="button" class="btn btn-primary" @click="updateProduct(product)">Submit</button> -->
            <button class="btn btn-primary" >Submit</button>
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
      mounted() {
        // Ở quá trình này chúng ta đã có đầy đủ quyền truy cập vào data, template, DOM
        let app = this;
        let id = app.$route.params.id;
        app.productId = id;
        axios.get('/api/v1/products/' + id)
            .then(function (resp) {
                app.product = resp.data;
            })
            .catch(function () {
                alert("Không tìm thấy Sản Phẩm")
            });
        },
      data() {
        return {
          productId: 0,
          product: {
            name: '',
            price: 0,
            count: 0,
          },
          errors: [],
        }
      },
  computed: {
    // tuong tu method nhung khong co tham so truyen vao, khi goi k co ()
  },
  methods: {
    gotoIndex(){
        this.$router.push({ name: "index"})
    },
    updateProduct() {
      event.preventDefault();
      var newProduct = this.product;
      axios.patch('/api/v1/products/' + this.productId, newProduct)
      .then(response => {
        console.log(response.data.result)
        this.gotoIndex();
      })
      .catch(error => {
        this.errors = error.response.data.errors.name
      })
    },
    saveForm(){

    }
    
  }
}
</script>
 
<style lang="scss" scoped>
    
</style>