import React, { useState, useEffect } from 'react';
import Button from "../../components/Button";
import { useHistory } from "react-router";
import { createArtistData } from "../../store/actions/actionCreator";
import { useDispatch } from "react-redux";
import { keyAPI } from "../../config";


const Search = () => {

    const dispatch = useDispatch();

    let history = useHistory();

    const [inputValue, setInputValue] = useState('');
    const [trackList, setTrackList] = useState([]);

    useEffect(() => {
        if(inputValue){
            fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${inputValue}&api_key=${keyAPI}&format=json`)
                .then(response => response.json())
                .then(result => setTrackList(result.results.trackmatches.track))
                .catch(e => console.log(`Error ${e.name}: ${e.message}`));
        }
    });

    const getArtistData = (value) => dispatch(createArtistData(value));

    const handleClick = () => {
        history.push('/');
    };

    const handleClickArtist = (e) => {
        e.stopPropagation();
        getArtistData(e.target.textContent);
        history.push(`/${e.target.textContent}`);
    }

    return(
        <>
            <Button onClick={handleClick} className='go-back'><i className="fas fa-arrow-left"> </i></Button>
            <input className='search-input' onChange={({ target}) => setInputValue(target.value)} value={ inputValue }/>
            <div className='search-results'>
                {trackList && trackList.map((elem,index) => {
                    return(
                        <div className='search-results__track' key={index}>
                            <h2 className='search-results__track-title'>{elem.name}</h2>
                            <p className='track-content__artist search-results__track-artist'>Artist:<span onClick={handleClickArtist}>{elem.artist}</span></p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};


export default Search;