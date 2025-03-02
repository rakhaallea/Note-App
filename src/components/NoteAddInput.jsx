import React from 'react';
import NoteModalForm from './NoteModalForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class NoteAddInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        }

        this.onToggleModal = this.onToggleModal.bind(this);
    }

    onToggleModal() {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }));
    }

    render() {
        const { addNotes } = this.props

        return (
            <div className='note-input'>
                <div className='note-input__wrap'>
                    <h2 className='note-input__title'>tambah catatan</h2>
                    <button
                        className='note-input__button'
                        onClick={this.onToggleModal}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <NoteModalForm
                    addNotes={addNotes}
                    show={this.state.showModal}
                    onClose={this.onToggleModal} />
            </div>
        )
    }
}

export default NoteAddInput