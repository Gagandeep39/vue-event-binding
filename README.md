# Basics - 2

- [Basics - 2](#basics---2)
  - [Event Binding](#event-binding)
  - [Passing arguments](#passing-arguments)
  - [Form Behaviour with Event](#form-behaviour-with-event)
  - [Event Modifier](#event-modifier)
  - [More on Event Binding](#more-on-event-binding)
  - [Two Way Binding](#two-way-binding)
  - [NOTES](#notes)
  - [Computed Properties](#computed-properties)
  - [Watchers](#watchers)

## Event Binding

- Bind an HTML elemnt event
- Allows Detecting of HTML events such as hover, click etc
- Keyword `v-on:html-event`
- There can be **multiple** event bindings
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

## Form Behaviour with Event

- By dfaultDOM is reloaded on formsubmit
- This behaviour can be prevented using `event.preventDefault();`, Same way be prevent this in react
- `v-on:submit` Submit Event

```js
methods: {
submitForm(event){
  event.preventDefault();
}
```

```html
<form v-on:submit="submitForm">
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

## Event Modifier

- Provides a better way to prevent page reload
- Allows changing event behviour
- Syntax `v-on:eventName.modifier`
- Very few supported modifiers re available, refer [docs](https://vuejs.org/v2/guide/events.html#Event-Modifiers)
- Snippet

```html
<form v-on:submit="submitForm">
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

## More on Event Binding

- `v-once` Prvents modifying Element
- `<p v-once>Starting value: {{ counter }}</p>` Prevents new counter value from being reflected

## Two Way Binding

- `v-bind:value`, `v-on:input="setName"`
  - HTML modifition will be reflected in JS var
  - JS changes will be reflected in HTML
- Snippet

```js
resetName() {
  this.name = '';
},
```

```html
<input v-bind:value="name" type="text" v-on:input="setName" />
<button v-on:click="resetName">Reset</button>
```

- `v-model='varname'`
  - Combination of Above 2
- Snippet

```js
resetName() {
  this.name = '';
},
```

```html
<input type="text" v-model="name" />
<button v-on:click="resetName">Reset</button>
```

## NOTES

- Vue only changes that DOM where variable has changed
- form submit event reloads the whole page by default
- `v-bind:value` + `v-on:input="setName"`, `v-model='varname'` both provides 2 way binding
- **PREVENT** using methods inside {{ helloWord() }}, as it will be called everytime someting changes in Vue
- This is because vue dont know whether that method is asssociated to changed data or not

## Computed Properties

- Vue calls it for us
- They are written a `methods`
- Called as normal variables i.e `data`
- Provides better performance
- Smarly called only when associated vaeiable changes

```html
<p>Your name: {{ fullName }}</p>
```

```js
computed: {
    fullName(name) {
      return this.name + ' Last name';
    },
  },
```

## Watchers

- Similar to compute properties
- Instead of Vue, We specify a method to be called when certain property changes
- Must have same method name a the variable in data

```js
watch: {
    // Called evertime value of name var changes
    name(value) {
      // fetches the recent value 'name' field in data
      this.watcher ++;
    }
  },
```

```html
<p>Watcher: {{ watcher }}</p>
```
