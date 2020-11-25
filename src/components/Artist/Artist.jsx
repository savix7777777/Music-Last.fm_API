import React, { useEffect, useState } from 'react';
import { keyAPI } from '../../config';
import Button from "../Button";
import {Route, useHistory} from "react-router-dom";


const Artist = ({name}) => {

    const [artistInfo, setArtistInfo] = useState({});
    let history = useHistory();

    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${keyAPI}&format=json`)
            .then(response => response.json())
            .then(result => setArtistInfo(result));
    });

    return(
        <>
            <Button onClick={() => history.push('/')} className='go-back'><i className="fas fa-arrow-left"> </i></Button>
            {artistInfo.artist && <div className='artist'>
                <img alt='artist-img' src={artistInfo.artist.image[4]['#text']} />
                <div className='artist-info'>
                    <h2 className='artist-info__name'>{artistInfo.artist.name}</h2>
                    <p className='artist-info__tags-title'>Tags:</p>
                    <ul className='artist-info__tags'>
                        {artistInfo.artist.tags.tag.map((elem, index) => {
                            return(
                                <li key={index}><a target="_blank" href={elem.url}>{elem.name}</a></li>
                            )
                        })}
                    </ul>
                    <p className='artist-info__bio'>{artistInfo.artist.bio.content.substr(0, 700)}...</p>
                </div>
            </div>}
        </>
    );
};


export default Artist;