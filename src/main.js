//// variables
const notesContainer = document.getElementById('app');
const addNoteButton = notesContainer.querySelector('.add-note');

//// event listeners
addNoteButton.addEventListener("click", () => addNote())

//// functions
function getNotes() {
    // retreive all existing notes from localStorage in clients browser
    // console.log(JSON.parse(localStorage.getItem("stickynotes-notes") || "[]"))
    // console.log(JSON.parse(localStorage.getItem("stickynotes-notes") || "[]")[0])
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");   // returns JS Array of JS Object's describing note data
}


function saveNotes(notes) {
    // save new notes to localStorage on clients browser
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}


function createNoteElement(id, content) {
    // build new HTML element to represent a note - define textarea, representing a single sticky note
    
    // create new note HTML element
    const newNote = document.createElement("textarea")
    newNote.classList.add("note")

    newNote.value = content
    newNote.placeholder = "Empty Sticky Note"

    newNote.addEventListener("change", () => {
        updateNote(id, newNote.value);
    })

    newNote.addEventListener("dblclick", () => {
        const doDelete = confirm("Do you really want to delete this note?");

        if (doDelete) {
            deleteNote(id)
        }
    })

    newNote.setAttribute('id', id)
    // newNote.textContent = content

    // addNote(newNote)

    return newNote
}


function addNote() {
    // add new note to HTML as well as save it to localStorage

    const notes = getNotes()
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    }

    const noteElement = createNoteElement(noteObject.id, noteObject.content)
    notesContainer.insertBefore(noteElement, addNoteButton)

    notes.push(noteObject)
    saveNotes(notes)
}


function updateNote(id, newContent) {
    // update note
    console.log('Updating Note...')
    console.log(id, newContent)

    const notes = getNotes();
    const targetNoteIndex = notes.findIndex(note => note.id == id)
    notes[targetNoteIndex]['content'] = newContent

    console.log(notes)
    saveNotes(notes)
}


function deleteNote(id, element) {
    // delete note
    console.log('Deleting Note...')
    console.log(id)
}


//// function calls
getNotes().forEach(note => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton)
})
