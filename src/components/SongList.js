import React, { useState } from 'react';
import uuid from 'react-uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'the great seekers', id: 1},
        {title: 'hall of whispers', id: 2},
        {title: 'sweet sensations', id: 3}
    ]);
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid()}]);
    }
    return ( 
        <div className="song-list">
        <ul>
        {songs.map(song => {
            return(<li key={song.id}>{song.title}</li>);
        })}
        </ul>
        <NewSongForm addSong={addSong} />
        </div>
    );
}

export default SongList;