import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

const NoteListItem = ({ notes, onDelete, onArchived, searchQuery }) => {

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderDisplay = (notesToRender, isArchived) => (
        <>
            <span>{isArchived ? `(${notesToRender.length})` : `(${notesToRender.length})`}</span>
            {notesToRender.length === 0 ? (
                <p className="notes-list__empty-message">catatan tidak tersedia</p>
            ) : (
                <div className="notes-list">
                    {notesToRender.map((note) => (
                        <div className="note-item" key={note.id}>
                            <div className="note-item__content">
                                <p className="note-item__title">{note.title}</p>
                                <p className="note-item__date">{note.createdAt}</p>
                                <p className="note-item__body">{note.body}</p>
                                <div className="note-item__action">
                                    <button
                                        className="note-item__delete-button"
                                        onClick={() => onDelete(note.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <button
                                        className="note-item__archive-button"
                                        onClick={() => onArchived(note.id)}>
                                        {isArchived ? <FontAwesomeIcon icon={faRotateLeft} /> : <FontAwesomeIcon icon={faFolderOpen} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </>
    )

    return (
        <>
            <h2>Catatan Aktif</h2>
            {renderDisplay(filteredNotes.filter((note) => !note.archived), false)}
            <h2>Arsip</h2>
            {renderDisplay(filteredNotes.filter((note) => note.archived), true)}
        </>
    )
}

export default NoteListItem