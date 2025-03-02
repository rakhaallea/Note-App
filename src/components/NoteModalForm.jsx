import React from 'react'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


class NoteModalForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charLimit: 30
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onTextAreaChangeHandler = this.onTextAreaChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    };

    onTitleChangeHandler(event) {
        const { charLimit } = this.state;
        const { value } = event.target;
        if (value.length <= charLimit) {
            this.setState(() => {
                return {
                    title: value,
                }
            });
        };
    }

    onTextAreaChangeHandler(event) {
        const { value } = event.target;
        this.setState(() => {
            return {
                body: value,
            }
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
        this.state.title = '';
        this.state.body = '';
        this.props.onClose();
        Swal.fire({
            icon: "success",
            title: "Catatan berhasil disimpan!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    render() {
        const { charLimit, title } = this.state;

        if (!this.props.show) {
            return null
        };

        return (
            <div className='note-input__body'>
                <button className="note-input__close-button" onClick={this.props.onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <form className='note-input__form' onSubmit={this.onSubmitHandler}>
                    <div>
                        <p className='note-input__title__char-limit'>Limit: <span>{charLimit - title.length}</span>
                        </p>
                        <input
                            type="text"
                            placeholder='Masukan Judul'
                            value={this.state.title}
                            onChange={this.onTitleChangeHandler}
                            required />
                    </div>
                    <textarea
                        rows={10}
                        placeholder='Masukan Isi'
                        value={this.state.body}
                        onChange={this.onTextAreaChangeHandler}
                        required>
                    </textarea>
                    <button type='submit' className='note-input__button-add'>tambah</button>
                </form>
            </div>
        );
    };
}

export default NoteModalForm;