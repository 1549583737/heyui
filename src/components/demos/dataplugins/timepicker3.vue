<<<<<<< HEAD
<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="time" placeholder="请选择日期" :option="param"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      param:{
        hours(){
          let hours = [];
          for(let i = 9; i <= 20; i++){
            hours.push(i);
          }
          return hours;
        },
        minutes(hour){
          let minutes = [];
          if(hour<12){
            minutes.push(7, 15, 23, 17, 34, 47, 58);
          }else{
            minutes.push(1, 3, 34, 45, 46, 47, 52);
          }
          return minutes;
        }
      }
    }
  }
}
</script>
=======
<style type="text/css" scoped>
  .h-row>div>div{
    padding: 8px;
    color: #FFF;
    border-radius: 3px;
    text-align: center;
    background-color: #808080;
  }
</style>
<template>
  <Row :space="9">
    <Col v-for="n in 8" :key="n" width="6"><div>{{n}}</div></Col>
    <Col width="24"><div>Top</div></Col>
    <Col width="6" ><div>Left</div></Col>
    <Col width="18" ><div>Right</div></Col>
    <Col width="18" ><div>Left</div></Col>
    <Col width="6" ><div>Right</div></Col>
  </Row>
</template>
>>>>>>> 9dbaa6f8eed49422fe476d1121029bb471fb9661
