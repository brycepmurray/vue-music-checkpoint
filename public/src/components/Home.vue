<template>
  <div class="home">
      <h1 class="text-center">The Beat in Your Song</h1>
      <div class="row">
          <div class="col-xs-6">
              <mytunes class="mytunes"></mytunes>
          </div>
          <div class="col-xs-6">
              <itunes class="itunes"></itunes>
          </div>
      </div>
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
    
    .mytunes {
        display: inline-block;
        min-height: 500px;
        min-width: 50%;
        background: slategray;
    }
    
    .itunes {
        display: inline-block;
        background: royalblue;
        min-height: 500px;
        min-width: 45%;
    }
</style>