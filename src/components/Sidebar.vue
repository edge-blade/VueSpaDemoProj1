<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">Total Time</h1>   
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{ time }} hours</h1>
    </div>

  </div>
</template>

<script>
    import Vue from 'vue';
    export default Vue.extend({
        props: ['time']
    })
</script>