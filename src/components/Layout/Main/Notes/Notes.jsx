import React,{Component} from 'react';
import Aux from '../../../../hoc/Auxi';
import Note from './Note/Note';

class notes extends Component {

    state={
        notes:null,
    }

    componentDidMount(){
        const updatednotes = Object.keys(this.props.notes).map(igKey => {
            return {
                ...this.props.notes[igKey],
                favorite:true
            }
        });
        this.setState({notes:updatednotes});
    }

render(){
    
    let notes = Object.keys(this.props.notes).map(igKey => {
        console.log(this.props)
        return <Note active={this.props.active} notes={this.props.notes} fav={this.state.favorite} igKey={igKey} key={igKey} title={this.props.notes[igKey].title} content={this.props.notes[igKey].content} />
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
export default notes