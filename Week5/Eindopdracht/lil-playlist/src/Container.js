import React from 'react';
import Song from './Components/Song';
import AddSong from './Components/AddSong'

function getRandomId() {
    return Math.ceil(Math.random() * 123456789);
  }

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [
                {id: getRandomId(),
                title: "Lonely Shepherd",
                artist: "James Last",
                genre: "Classic",
                rating: "5"},
                {id: getRandomId(),
                title: "Nikita",
                artist: "Elton John",
                genre: "Easy",
                rating: "5"}
                ], 
        }
    }

    deleteSongHandler = (id) => {
        console.log("Deletehandler", id)
        this.setState({
          songs: [...this.state.songs.filter(song => song.id !== id)]
    }); 
    }  
    
    handleOnSubmit = (e, newSong) => {
        newSong = { ...newSong, id: getRandomId() };
        //console.log("handleSubmit", newSong);
        e.preventDefault();
        this.setState({ songs: [...this.state.songs, newSong] });
        
      };

    handleFilter = (e, genre) => {
        e.preventDefault();
        this.setState({ songs: [...this.state.songs.filter(song => 
            song.genre === genre)]
        })
    };

render() {

    return (      
        
        <div>
        <AddSong 
        clickSubmit={this.handleOnSubmit}
        clickFilter={this.handleFilter}
        />
        {this.state.songs.map((song, index) => {
        return <Song
          click={() => this.deleteSongHandler(song.id)}
          title={song.title} 
          artist={song.artist}
          genre={song.genre}
          rating={song.rating}
          id={song.id}
          key={index}
          />})}
        
        </div>
      )
}
}


export default Container