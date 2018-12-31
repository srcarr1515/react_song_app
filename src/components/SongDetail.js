import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song){
        return <div>
            Select a song!
        </div>
    }

    return (
    <div>
        <h3>Details for:</h3>
        <h4>Title: {song.title}</h4>
        <p>Duration: {song.duration}</p>
    </div>
        );
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);