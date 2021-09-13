import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';
import Aux from '../../../../../hoc/Auxi';
import axios from '../../../../../axios';

class Note extends Component {

IconClickHandler = (igKey) => {
    let updatednotes = Object.keys(this.props.notes).map((note)=> {
        if(igKey===note){

            return {
                    ...this.props.notes[note],
                    favorite:!this.props.notes[note].favorite
                }
            }
    });
    updatednotes=updatednotes.filter(function(el){
        return el!== undefined;
    });
    console.log(this.props);
    axios.delete('/notes/'+igKey+'.json').then(res => console.log(res));
    axios.post('/notes.json', ...updatednotes)
    .then(response => console.log(response));

}

    render() {
        let font=null;
        console.log(this.props.active)
        if(this.props.active){
            font = <FontAwesomeIcon onClick={()=>this.IconClickHandler(this.props.igKey)} icon={faStar} className="hover:text-yellow-500 text-2xl text-white"></FontAwesomeIcon>
        }

        return (
            <Aux>
                <div class="bg-primary w-1/4 h-60 m-2 rounded-2xl inline-block border-white border-2">
                    <h4 class="text-center font-bold text-white p-5 inline-block">{this.props.title}</h4>
                    
                       {font} 
                    
                    <hr />
                    <p class="m-2 text-white p-3" dangerouslySetInnerHTML={{__html:this.props.content}}></p>
                </div>
            </Aux>
        );
    }
}

export default Note;