import React,{Component} from 'react';
import Note from '../Notes/Note/Note';
import Aux from '../../../../hoc/Auxi';

class Favorites extends Component  {


    // state={
    //     notes:null,
    // }

    // componentDidMount(){
    //     const updatednotes = Object.keys(this.props.notes).map(igKey => {
    //         return {
    //             ...this.props.notes[igKey],
    //             favorite:true
    //         }
    //     });
    //     console.log(updatednotes);
    //     this.setState({notes:updatednotes});
    // }

    render(){
        let notes = Object.keys(this.props.notes).map(igKey => {

            return <Note 
                fav={this.props.notes[igKey].favorite} 
                key={igKey} 
                title={this.props.notes[igKey].title} 
                content={this.props.notes[igKey].content} />
            
        });
        // console.log(notes);
    
    return (
        <Aux>
            <div class="m-8">
                {notes}
            </div>
        </Aux>
    );
    }

}

export default Favorites;