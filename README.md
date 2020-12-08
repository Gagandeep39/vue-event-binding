# Basics - 2

- [Basics - 2](#basics---2)
  - [Event Binding](#event-binding)

## Event Binding

- Bind an HTML elemnt event
- Allows Detecting of HTML events such as hover, click etc
- Keyword `v-on:html-event`
- Snippet

```js
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      return this.counter++;
    },
  },
});
```

```html
<section id="events">
  <h2>Events in Action</h2>
  <!-- Calling a method -->
  <button v-on:click="add()">Add</button>
  <!-- Logic at html - Must be Avoided -->
  <button v-on:click="counter = counter-1">Reduce</button>
  <p>Result: {{ counter }}</p>
</section>
```

- Vue can use `add` or `add()`, Vue will understand and approprialy call it for us
