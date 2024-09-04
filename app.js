document.addEventListener('DOMContentLoaded', function() {
    const addNoteBtn = document.getElementById('addNoteBtn');
    const notesContainer = document.getElementById('notesContainer');
    const noteText = document.getElementById('noteText');

    function createNoteElement(text) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        
        const notePara = document.createElement('p');
        notePara.textContent = text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn');
        
        deleteBtn.addEventListener('click', function() {
            notesContainer.removeChild(noteDiv);
        });
        
        noteDiv.appendChild(notePara);
        noteDiv.appendChild(deleteBtn);
        
        return noteDiv;
    }

    addNoteBtn.addEventListener('click', function() {
        const text = noteText.value.trim();
        if (text) {
            const noteElement = createNoteElement(text);
            notesContainer.appendChild(noteElement);
            noteText.value = '';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const addNoteBtn = document.getElementById('addNoteBtn');
    const notesContainer = document.getElementById('notesContainer');
    const noteText = document.getElementById('noteText');

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(text => {
            const noteElement = createNoteElement(text);
            notesContainer.appendChild(noteElement);
        });
    }

    function saveNotes() {
        const notes = [];
        document.querySelectorAll('.note p').forEach(notePara => {
            notes.push(notePara.textContent);
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function createNoteElement(text) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        
        const notePara = document.createElement('p');
        notePara.textContent = text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn');
        
        deleteBtn.addEventListener('click', function() {
            notesContainer.removeChild(noteDiv);
            saveNotes();
        });
        
        noteDiv.appendChild(notePara);
        noteDiv.appendChild(deleteBtn);
        
        return noteDiv;
    }

    addNoteBtn.addEventListener('click', function() {
        const text = noteText.value.trim();
        if (text) {
            const noteElement = createNoteElement(text);
            notesContainer.appendChild(noteElement);
            noteText.value = '';
            saveNotes();
        }
    });

    loadNotes();
});

        if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
        }
