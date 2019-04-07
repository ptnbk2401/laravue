<template>
    <div class="component-index">
        <div class="container-fluid">
            <div class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Title</a>
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="list-user-comp">
                <Page1 @userSelected="childrenSelectUser"></Page1>
            </div>
            <div class="user-detail-comp">
                <Page2 :userDetailInfo="userSelectedFromChild"></Page2>
            </div>
        </div>
    </div>
</template>

<script>
    import Page1 from './Page1.vue'
    import Page2 from './Page2.vue'
    export default {
        components: {
            Page1,
            Page2
        },
    
        data() {
            return {
               a:'home',
                userSelectedFromChild: {}     
            }
        },
        methods: {
            // Process event emitted from child
            childrenSelectUser(user) {
                console.log(user);
                this.userSelectedFromChild = user;
            }
        }
        
       
    }
</script>
 
<style lang="scss" scoped>
    
</style>