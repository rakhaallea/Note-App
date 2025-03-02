import React from 'react';

class NoteHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
        }

        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    }

    onSearchChangeHandler(event) {
        const query = event.target.value;
        this.setState({ searchQuery: query });
        this.props.onSearch(query);
    }

    render() {
        return (
            <>
                <div className="note-app__header">
                    <h3 className="note-app__title">note app</h3>
                    <input
                        type="text"
                        placeholder='cari catatan...' className='note-app__search'
                        value={this.state.searchQuery}
                        onChange={this.onSearchChangeHandler} />
                </div>
            </>
        )
    }
}

export default NoteHeader;