import React, {Component} from 'react';


class AddSong extends Component {  
    getInitialState = () => {
        return {
          newSong: {
            title: "",
            artist: "",
            genre: "",
            rating: ""
          }
        };
      };
    
      state = this.getInitialState();

    handleChange = e => {
        //console.log("handleChange", e.target.name, e.target.value);
        this.setState({
            newSong: { ...this.state.newSong, [e.target.name]: e.target.value }
            //add(){ newSong:{ id : Random.int() } }
        });
      };

    render(){

        return(
        
        <form name="id" 
        value={Math.floor(Math.random() * 10000) + 1} 
        onChange={this.handleChange}
        style={{display: 'flex'}} >
        <input
            type="text"
            placeholder="New Song, Title"
            name="title"
            style={{flex: '5'}}
            onChange={this.handleChange}
            value={this.props.title}
        ></input>
        <input
            type="text"
            placeholder="New Song, Artist"
            name="artist"
            style={{flex: '5'}}
            onChange={this.handleChange}
            value={this.props.artist}
        ></input>
        <select
            name="genre"
            onChange={this.handleChange}
            value={this.props.genre}
            style={{flex: '5'}}>
            >
            <option value=""></option>
            <option value="Pop">Pop</option>
            <option value="Classic">Classic</option>
            <option value="Rock">Rock</option>
            <option value="Easy">Easy</option>
        </select> 
        <select
            name="rating"
            onChange={this.handleChange}
            value={this.props.rating}
            style={{flex: '5'}}>
            <option value=""></option>
            <option value="1">&#8902;</option>
            <option value="2">&#8902; &#8902;</option>
            <option value="3">&#8902; &#8902; &#8902;</option>
            <option value="4">&#8902; &#8902; &#8902; &#8902;</option>
            <option value="5">&#8902; &#8902; &#8902; &#8902; &#8902;</option>
        </select> 
        <button onClick={event => {
            this.setState(this.getInitialState());
            this.props.clickSubmit(event, this.state.newSong);
          }}>Add song</button>
        <button onClick={event => {
            this.setState(this.getInitialState());
            this.props.clickFilter(event, this.props.genre);
          }}>Filter</button>
        </form>

        )
    }
}
export default AddSong