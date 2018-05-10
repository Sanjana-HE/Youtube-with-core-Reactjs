import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
        // this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (
            <div className="search-bar">
                <input value={this.state.term} onChange={event=>this.onInputChange(event.target.value)}   />
            </div>

        );
    }
    // onInputChange(event){
    //     // console.log(event)
    //          this.setState({term:event.target.value});
    //         console.log(event.target.value)
    //     }

    //automatically binds this
    onInputChange = (term) => {
        this.setState({ term: term});
        this.props.onSearchTermChange(term);
        console.log(term)
    }
}

export default SearchBar;