import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from '../../axios';

class Form extends Component {

  state={
    title:'',
    content:''
  }

  PostNoteHandler = () => {

    const note ={
      title:this.state.title,
      content:this.state.content,
      favorite: false
    }
    axios.post('/notes.json', note)
    .then(response => console.log(response));

  }

  render() {

    return (
      <Aux>
        <div class="w-2/3 h-2/3">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Title
        </label>
        <input
         onChange={(event) => {this.setState({title:event.target.value})}}
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Note Title"/>
        </div>
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Your Note
        </label>
        <div>
          <CKEditor 
              editor={ ClassicEditor }
              data={this.state.data}
              onChange={ ( event, editor ) => {
                  this.setState({content:editor.getData()});
            }}
          />
        </div>
      </div>
      <div class="flex items-center justify-between">
      <button onClick={this.PostNoteHandler} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        ADD
      </button>
      </div>
  </form>
</div>
      </Aux>
    );
  }
}

export default Form;