<template>
    <div class="my-component">
        <div class="block-1" v-if="a == 1" v-bind:style="styleObject">
            This is block 1
        </div>
        <div class="block-2" v-else-if="a == 2" v-bind:style="styleObject">
            This is block 2
        </div>
        <div class="block-3" v-else v-bind:style="styleObject">
            This is block 3
        </div>
        <div :class="[$style.welcome_text]">
            This is parent
            <div :class="[$style.text]">
                hey
            </div>
        </div>
        <div>
            <button @click="setA(1,'red')">Button 1</button>
            <button @click="setA(2,'green')">Button 2</button>
            <button @click="setA(3,'blue')">Button 3</button>
        </div>
        <hr>
        <ul>
            <li v-for="(color, index) in colors">
                {{ color }} - at index {{ index }}
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="(info, key, index) of myInfo">
                {{ key }} - {{ info }} - at index {{ index }}
            </li>
        </ul>
        <hr>
        <div>
          <span v-for="n in 100" v-if="n%2">{{ n }}, </span>
        </div>
        <div>
          <span v-for="n in chanLists" >{{ n }}, </span>
        </div>
        <hr>
        <div class="text-center">
            <p style="color: blue">{{input}}</p>
            <input type="text" name="name" v-model.trim='input'><br>
            <input type="number" name="number" v-model.number='input'><br>
            <input type="text" name="lazy" v-model.lazy='input'><br>
            <input type="radio" name="gender" value="man" v-model='input'>
            <input type="radio" name="gender" value="woman" v-model='input'>
            <div class="input-form">
                <select v-model="input">
                    <option disabled="">Choose one</option>
                    <option :value="values.one">One</option>
                    <option :value="values.two">Two</option>
                </select>
            </div>
        </div><hr>
        <div @click="alertHello" style="width: 200px; height: 100px; background: red">
            <button @click="alertWelcome.stop">Welcome</button>
            
        </div>
        <form @submit.prevent="sayWelcome">
            <button type="submit" @click.prevent="sayWelcome1">Submit</button>
        </form>
        <input @keyup.enter="alertHello" type="text" value="enter">
        <input @keyup.ctrl.c="alertHello" type="text" value="ctrl + c">

    </div>
</template>

<script>
    export default {
        data() {
            return {
               a: 1,
               styleObject: {
                    color: 'red',
                    fontSize: '13px'
               },
               colors: [
                    'red',
                    'green',
                    'blue',
               ],
               myInfo: {
                    name: 'Phan Thanh Nguyên',
                    age: '22',
                    country: 'vietnam'
                },
                lists: [
                    1,2,3,4,5,6,7,8,9,10
                ],
                input:'input',
                values: {
                    one: 'This is One',
                    two: 'This is Two'
                },    
            }
        },
        computed: {
            chanLists(){
                return this.lists.filter(item => item%2==0);
            }
        },
        methods: {
            setA(number,mau){
                this.a = number;
                this.styleObject.color = mau;
            },
            alertHello(){
                alert('Hello');
            },
            alertWelcome(){
                alert('Welcome');
            },
            alertWelcomeAndHello(){
                alert('Welcome');
            },
            sayWelcome(){
                alert('Welcome');
            },
            sayWelcome1(){
                alert('Welcome 1');
            },

        },
        watch: {
            
        }
       
    }
</script>
 
<style lang="scss" scoped module>
    .welcome_text {
        color: red;
        .text {
            color: blue;
        }
    }
</style>