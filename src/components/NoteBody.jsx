import React from 'react';
import NoteAddInput from './NoteAddInput';
import NoteList from './NoteList';

const NoteBody = ({ notes, onDelete, onArchived, addNotes, searchQuery }) => {
    return (
        <div className='note-app__body'>
            <NoteAddInput addNotes={addNotes} />
            <NoteList
                notes={notes}
                onDelete={onDelete}
                onArchived={onArchived}
                searchQuery={searchQuery} />
        </div>
    );
};

export default NoteBody;