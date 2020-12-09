import React from 'react';
import Note from '../Components/Note';

class NotesContainer extends React.Component {
    // makes an array
    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    
    notes = () => {
        return this.apiResponse().map( noteObj => {
            console.log(noteObj)
            return <Note key={noteObj.id} note={noteObj}/>
        })
    }

    render() {
        return (
            <ul>
                {this.notes()}
            </ul>
        )
    }

}

export default NotesContainer;

