# Basics - 2

- [Basics - 2](#basics---2)
  - [Event Binding](#event-binding)
  - [Passing arguments](#passing-arguments)
  - [NOTES](#notes)

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

## Passing arguments

- `<button v-on:click="add(10)">Add 10</button>`
- We can simply ass arguments like we do in normal javascript
- Textbox event
- Databinding demo

```html
<input type="text" v-model="name" />
<p>Your name: {{name || 'Empty'}}</p>
```

- Event binding demo

```js
methods: {
  setName(event) {
   this.name = event.target.value;
  },
},
```

```html
<input type="text" v-on:input="setName" />
<p>Your name: {{name || 'Empty'}}</p>
```

- Another Event binding method


```js
methods: {
  setName(event, lastName) {
   this.name = event.target.value + ' ' + lastName;
  },
},
```

```html
<input type="text" v-on:input="setName($event, 'Gaga')" />
<p>Your name: {{name || 'Empty'}}</p>
```

## NOTES

- Vue only changes that DOM where variable has changed
