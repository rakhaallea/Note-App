import React from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import Swal from 'sweetalert2';
import { getInitialData, showFormattedDate } from '../utils/index';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: JSON.parse(localStorage.getItem('notes')) || [],
            // notes: getInitialData(),
            searchQuery: ''
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    componentDidUpdate(_, prevState) {
        if (prevState.notes !== this.state.notes) {
            localStorage.setItem('notes', JSON.stringify(this.state.notes));
        }
    }

    onDeleteHandler(id) {
        Swal.fire({
            title: "Apakah kamu yakin?",
            text: "Catatan akan dihapus",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#10375c",
            cancelButtonColor: "#FB4141",
            confirmButtonText: "Ya",
            cancelButtonText: "Tidak"
        }).then((result) => {
            if (result.isConfirmed) {
                const notes = this.state.notes.filter((note) => note.id !== id);
                this.setState({ notes });
                Swal.fire({
                    title: "Deleted!",
                    text: "Catatan kamu sudah dihapus.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }

    onArchivedHandler(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            ),
        }));
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: showFormattedDate(+new Date()),
                        archived: false
                    }
                ]
            }
        })
    }

    onSearchHandler(query) {
        this.setState({ searchQuery: query })
    }

    render() {
        const { notes, searchQuery } = this.state

        return (
            <>
                <NoteHeader onSearch={this.onSearchHandler} />
                <NoteBody
                    notes={notes}
                    onDelete={this.onDeleteHandler}
                    onArchived={this.onArchivedHandler}
                    addNotes={this.onAddNotesHandler}
                    searchQuery={searchQuery} />
            </>
        );
    }
}

export default NoteApp;