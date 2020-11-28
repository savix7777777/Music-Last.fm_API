import React, { useEffect } from 'react';
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistData } from "../../store/actions/actionCreator";


const Artist = ({name}) => {

    const dispatch = useDispatch();

    const fetchArtistInfo = (name) => dispatch(fetchArtistData(name));

    let history = useHistory();

    useEffect(() => {
        fetchArtistInfo(name);
    });

    const artistInfo = useSelector(({fetchArtistData}) => fetchArtistData);

    return(
        <>
            <Button onClick={() => history.push('/')} className='go-back'><i className="fas fa-arrow-left"> </i></Button>
            {Object.keys(artistInfo).length && <div className='artist'>
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