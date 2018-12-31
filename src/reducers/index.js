import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Smells Like Teen Spirit', duration: '3:28'},
        {title: 'Creep', duration: '3:41'},
        {title: 'Semi-Charmed Life', duration: '2:13'}
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});