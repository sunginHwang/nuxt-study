<template>
  <p>proxy</p>
</template>

<script>
  export default {
    name: "proxy",
    created() {
      const person = new Proxy({}, {
        get: function (target, prop) {
          console.log('-get-in-');
          console.log(target);
          console.log(prop);
          console.log('-get-out-');
          return target[prop] + '호출 가로채기!!';
        },
        set: function (obj, prop, value) {

          const ageValidation = prop === 'age' && !Number.isInteger(value);
          if (ageValidation) {
            throw new TypeError('나이는 숫자로 입력해야 합니다.');
          }

          obj[prop] = value + 'set!!';
          return true;
        },
        defineProperty: function (target, prop, descriptor) {
          console.log('called: ' + prop);
          console.log(target);
          return true;
        },
        deleteProperty: function(target, prop) {
          console.log('deleteProperty');
          console.log(target);
          console.log(prop);
          console.log('deleteProperty-end');
          delete target[prop];
          return true;
        }
      });

      Object.defineProperty(person, 'weight', {weight: 70, sex: 'man'});

      person.name = 'sungin';
      person.age = 23;
      console.log(person.name);
      delete person.name;
      console.log(person);
    }


  }
</script>

<style scoped>

</style>
