<template>
  <div class="home">
 <h1 class="text-center">The Beat in Your Song</h1>
    <my-tunes class="my-tunes"></my-tunes>
    <itunes class="itunes"></itunes>
  </div>
</template>

<script>
    import Itunes from './Itunes'
    import Mytunes from './Mytunes'
    export default {
        name: 'home',
        components: {
            Mytunes,
            Itunes
        },
        //local variables
        data() {
            return {

            }
        }
    }
    // one function that is run only once
    // mounted() {
    //    console.log('You are here')
    // },
    // object of muliple functions that are used onclick/ on call needs to be called or invoked to run
    // methods: {
    //         someFunc() {

    //         },
    //         morefunc() {}
    //     },
    //     //consistently running
    //     computed: {
    //         someFun() {

    //         },
    //         morefun() {}
    //     }
    // }
</script>


<style>
    .h1 {
        color: teal,
    }
    
    .my-tunes {
        display: inline-block;
        min-height: 500px;
        min-width: 50%;
        background: rgba(0, 128, 0, 0.678);
    }
    
    .itunes {
        display: inline-block;
        background: rgba(255, 0, 0, 0.678);
        min-height: 500px;
        min-width: 45%;
    }
</style>