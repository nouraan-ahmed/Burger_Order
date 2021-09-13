import React, { Component } from 'react';
import Favorites from '../Main/Favorites/Favorites';
import Notes from '../Main/Notes/Notes';
import AddNote from '../Main/AddNote/AddNote';
class Navbar extends Component {

    state = {
        notes: this.props.notes,
        ActiveButton: 'view',
        clicked:''
    }
    ComponentViewer = ''

    viewHandler = () => {
        this.setState(
            {
                ActiveButton: 'view'
            }
        )
        this.ComponentViewer = <Notes active={this.state.ActiveButton} notes={this.props.notes} />

    }
    favoriteHandler = () => {
        this.setState(
            {
                ActiveButton: 'favorites'
            }
        )
        this.ComponentViewer = <Favorites notes={this.props.favs}></Favorites>

        return 0;
    }
    addNoteHandler = () => {
        this.setState(
            {
                ActiveButton: 'newNote'
            }
        )
        this.ComponentViewer = <AddNote/>
        return 0;
    }
    searchHandler = () => {
        this.setState(
            {
                ActiveButton: 'search'
            }
        )
        // this.ComponentViewer = <Notes notes={this.state.notes} />
        return 0;
    }


    render() {
        let view = ''
        let favorites = ''
        let newNote = ''
        let search = ''

        switch (this.state.ActiveButton) {
            case 'view':
                view = 'bg-gray-900 text-white'
                favorites = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                newNote = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                search = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                break;
            case 'favorites':
                view = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                favorites = 'bg-gray-900 text-white'
                newNote = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                search = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                break;
            case 'newNote':
                view = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                favorites = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                newNote = 'bg-gray-900 text-white'
                search = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                break;
            case 'search':
                view = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                favorites = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                newNote = 'text-gray-300 hover:bg-gray-700 hover:text-white'
                search = 'bg-gray-900 text-white'
                break;

            default:
                break;
        }


        return (
            <div>
                {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
                <nav className="bg-gray-800">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* <!-- Mobile menu button--> */}
                                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    {/* <!--
                                    Icon when menu is closed.

                                    Heroicon name: outline/menu

                                    Menu open: "hidden", Menu closed: "block" */}

                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    {/* <!--
                                    Icon when menu is open.

                                    Heroicon name: outline/x

                                    Menu open: "block", Menu closed: "hidden"
                                    --> */}
                                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    {/* <img className="block lg:hidden h-8 w-auto" src="../../images/notes.png" alt="Workflow" />
                                    <img className="hidden lg:block h-8 w-auto" src="../../images/notes.png" alt="Workflow" /> */}
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                        <a href="#" onClick={this.viewHandler} className={view + " text-white px-3 py-2 rounded-md text-sm font-medium"} aria-current="page">View Notes</a>

                                        <a href="#" onClick={this.favoriteHandler} className={favorites + " px-3 py-2 rounded-md text-sm font-medium"}>Favorites</a>
 
                                        <a href="#" onClick={this.addNoteHandler} className={newNote + " px-3 py-2 rounded-md text-sm font-medium"}>New Note</a>

                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                                {/* <!-- Profile dropdown --> */}
                                <div className="ml-3 relative">
                                    <div>
                                        <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <div className="flex space-x-4">
                                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                                <input type="text" name="price" id="price" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Search Notes" />
                                                <a href="#" className={search + " px-3 py-2 rounded-md text-sm font-medium"} aria-current="page">Search</a>
                                            </div>
                                        </button>
                                    </div>

                                    {/* <!--
                                                Dropdown menu, show/hide based on menu state.

                                                Entering: "transition ease-out duration-100"
                                                From: "transform opacity-0 scale-95"
                                                To: "transform opacity-100 scale-100"
                                                Leaving: "transition ease-in duration-75"
                                                From: "transform opacity-100 scale-100"
                                                To: "transform opacity-0 scale-95"
                                                --> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                    <div class="sm:hidden" id="mobile-menu">
                        <div class="px-2 pt-2 pb-3 space-y-1">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">View Notes</a>

                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Favorites</a>

                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">New Note</a>

                        </div>
                    </div>
                </nav>
                <div> {this.ComponentViewer}</div>
            </div>
        );
    }
}

export default Navbar;
