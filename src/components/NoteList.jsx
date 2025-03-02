import React from 'react';
import NoteListItem from './NoteListItem';

const NoteList = ({ notes, onDelete, onArchived, searchQuery }) => {
    return (
        <div className='notes-container'>
            <NoteListItem
                notes={notes}
                onDelete={onDelete}
                onArchived={onArchived}
                searchQuery={searchQuery} />
        </div>
    )
};

export default NoteList;