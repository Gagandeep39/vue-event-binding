const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    // Easy way
    setName(event) {
      this.name = event.target.value;
    },
    // setName(event, lastName) {
    //   this.name = event.target.value + ' ' + lastName;
    // },
    submitForm(event) {
      // Not required if we are using .prevent
      // event.preventDefault();
    },
    resetName() {
      this.name = '';
    },
  },
});

app.mount('#events');
