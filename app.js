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
