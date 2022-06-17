//// variables
const notesContainer = document.getElementById('app');
const addNoteButton = notesContainer.querySelector('.add-note');

//// event listeners

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

    newNote.setAttribute('id', id)
    // newNote.textContent = content

    addNote(newNote)
}

function addNote(noteElement) {
    // add new note to HTML as well as save it to localStorage

    // append new note to #app
    document.getElementById('app').appendChild(noteElement)

    // get array of notes from local storage as JSON string
    const storedNotes = getNotes()
    console.log('storedNotes: ' + storedNotes)
    console.log('storedNotes typeof: ' + typeof storedNotes)

    // add new note to array of notes in local storage
    console.log(noteElement.id)
    console.log(noteElement.value)

    const newNoteObject = {
        id: noteElement.id,
        content: noteElement.value
    };
    console.log(newNoteObject)

    storedNotes.push(newNoteObject)
    
    // save all notes to localStorage
    saveNotes(storedNotes)
}

function updateNote(id, newContent) {
    // update note
}

function deleteNote(id, element) {
    // delete note
}