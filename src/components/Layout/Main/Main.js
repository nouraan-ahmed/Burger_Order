import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from '../../../axios';

class Main extends Component {

state={
    notes:{},
    favorites:{}
}

componentWillMount (){
    axios.get('/notes.json').then(response => {
        const notes = response.data;
        return notes
    }).then( data => {
        this.setState({
            notes:data
        })
        let notesObj=this.state.notes;
        const updatednotes = Object.keys(this.state.notes).map(igKey => {
            if(this.state.notes[igKey].favorite){
            return {
                ...this.state.notes[igKey]
            }}

        });
        
        this.setState({favorites: updatednotes.filter(function(el){
            return el!== undefined;
        })});
        console.log(this.state.notes);
        console.log(this.state.favorites);
      });
    
     
}


    render() {
        return (
            <div>
                <Navbar notes={this.state.notes} favs={this.state.favorites}></Navbar>
            </div>
        );
    }
}

export default Main;