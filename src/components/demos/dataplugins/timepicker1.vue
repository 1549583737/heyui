<<<<<<< HEAD
<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="time" placeholder="请选择日期"></DatePicker>
  </div>
</template>

<script>
import manba from 'manba';
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
=======
<style type="text/css" scoped>
  .h-row>div{
    height: 30px;
    color: #FFF;
    text-align: center;
  }
</style>
<template>
  <div class="h-row">
    <div class="h-col-6 bg-gray-color"></div>
    <div class="h-col-6 bg-gray1-color"></div>
    <div class="h-col-6 bg-gray2-color"></div>
    <div class="h-col-6 bg-gray3-color"></div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {}
    }
  }
</script>
>>>>>>> 9dbaa6f8eed49422fe476d1121029bb471fb9661
