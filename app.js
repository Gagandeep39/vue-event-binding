const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter++;
    },
    reduce(num) {
      this.counter = this.counter - 1;
    },
    // Easy way
    // setName(event) {
    //   this.name = event.target.value;
    // },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event){
      // Not required if we are using .prevent
      // event.preventDefault();
    }
  },
});

app.mount('#events');
