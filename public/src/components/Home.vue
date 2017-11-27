<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <my-tunes class="my-tunes"></my-tunes>
    <itunes class="itunes"></itunes>
    <button></button>
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
        data() {
            return {

            }
        }
    }
</script>


<style>
    .my-tunes {
        display: inline-block;
        min-height: 500px;
        min-width: 50%;
        background: green;
    }
    
    .itunes {
        display: inline-block;
        background: red;
        min-height: 500px;
        min-width: 45%;
    }
</style>