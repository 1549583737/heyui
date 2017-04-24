<<<<<<< HEAD
<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="time" placeholder="请选择日期" :disabled="true"></DatePicker>
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
  .h-row>div>div{
    height: 30px;
    color: #FFF;
    text-align: center;
  }
</style>
<template>
  <Row>
    <Col><div v-bg-color:gray></div></Col>
    <Col width="6"><div class="bg-gray-color"></div></Col>
    <Col width="6"><div class="bg-gray1-color"></div></Col>
    <Col width="6"><div class="bg-gray2-color"></div></Col>
    <Col width="6"><div class="bg-gray3-color"></div></Col>
  </Row>
</template>
>>>>>>> 9dbaa6f8eed49422fe476d1121029bb471fb9661
