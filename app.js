new Vue({
  el: "#app",
  data: {
    name: `Ilyas`,
    job: `Full-stack developer`
  },
  methods: {
    greet: function() {
      return `Hello my name is ${this.name}`;
    }
  }

})
