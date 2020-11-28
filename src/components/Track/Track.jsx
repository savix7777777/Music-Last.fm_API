import React from 'react';
import { useDispatch } from "react-redux";
import { createArtistData } from "../../store/actions/actionCreator";
import { useHistory } from "react-router";


const Track = ({name, artist, image}) => {

    let history = useHistory();

    const dispatch = useDispatch();

    const getArtistData = (value) => dispatch(createArtistData(value));

    const handleClick = (e) => {
        e.stopPropagation();
        getArtistData(artist.name);
        history.push(`/${artist.name}`);
    }

    return(
        <div className='track-box'>
            <img alt='track-img' src={image[2]['#text']} />
            <div className='track-content'>
                <h2 className='track-content__name'>{name}</h2>
                <p className='track-content__artist'>Artist:<span onClick={handleClick}>{artist.name}</span></p>
                <a target="_blank" className='track-content__link' href={artist.url}>Show artist on Last.fm</a>
            </div>
        </div>
    )
};


export default Track;