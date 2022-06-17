# Sticky Notes App
- based on [How to Build a Sticky Notes App](https://youtu.be/Efo7nIUF2JY) by [dcode](https://twitter.com/dcodeyt)

## lessons learned
## order of app creation
1. HTML file (index)
2. CSS styling for HTML
3. JavaScript functionality

    1. create dummy functions

        Think of basic functionalities needed
    
    2. create variables

        needed for functions

    3. code functionality to functions step by step
    
        1. use developer tools (console and local storage) to test correct functionalty of functions upfront

## JS functions/methods
### JSON.parse(string)
- constructs JavaScript representation (value or object) of provided JSON string
- converts JSON string to JS object or value

### JSON.stringify(jsRepresentation)
- constructs JSON representation of provided JS object or value
- converts JS object or value to JSON representation

### Template-Strings
- strings with embedded expressions
- similar to f-strings in Python
- allow multi-line strings
- delimited with backticks (`)

**Syntax**
```js
`String including ${variable}`
```