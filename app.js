const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      watcher: 0
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
  computed: {
    fullName(name) {
      return this.name + ' Last name';
    },
  },
  watch: {
    // Called evertime value of name var changes
    name(value) {
      // fetches the recent value 'name' field in data
      this.watcher ++;
    }
  },
});

app.mount('#events');
