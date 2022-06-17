# Sticky Notes App
- based on [How to Build a Sticky Notes App](https://youtu.be/Efo7nIUF2JY) by [dcode](https://twitter.com/dcodeyt)

## lessons learned
### order of app creation
1. HTML file (index)
2. CSS styling for HTML
3. JavaScript functionality

    1. create dummy functions

        Think of basic functionalities needed.
        
        All functions should be quite specialized and handle narrow tasks/actions.
    
    2. create variables

        which are needed for functions

    3. code functionality to functions step by step
    
        Use developer tools (console and local storage) to test correct functionalty of functions upfront (for debugging during development)
    
    4. Validation functionality of functions (during development)

        Use event listeners to other specialized functions inside functions. 
        
        When calling other functions (using event listeners) simply validate the workability of the event listeners by adding `console.log`'s with passed parameters to the called function.
        That way you validate that the event listener `type` works as intended one once hand.
        On the other hand you validate that the parameters from the former function are passed correctly to the specialized function.

        **Simplified example for deletion of note element**:
        ```js
        function createNoteElement(id, content) {
            // delete note element on double click event
            newNote.addEventListener("dblclick", () => {
                deleteNote(id, newNote)
            })
        }

        function deleteNote(id, element) {
        console.log('Deleting Note...')
        console.log(id, element)
        }
        ```

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


## Potential Improvements
- improve UX to delete notes
    - e.g. add "X"-button in the upper right corner of note on hover