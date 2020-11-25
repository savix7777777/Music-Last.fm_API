import React, { useEffect,useState } from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import { keyAPI } from "./config";
import './styles/index.scss';
import Track from "./components/Track";
import { useDispatch, useSelector } from "react-redux";
import Artist from "./components/Artist";
import Button from "./components/Button";
import Search from "./components/Search";
import { createSetSearch } from "./store/actions/actionCreator";


const App = () => {

    const dispatch = useDispatch();

    const [tracks, setTracks] = useState([]);

    const artistName = useSelector(({getArtistData}) => getArtistData);
    const search = useSelector(({search}) => search);

    const changeSearch = (value) => dispatch(createSetSearch(value));

    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=germany&api_key=${keyAPI}&format=json`)
            .then(response => response.json())
            .then(result => setTracks(result.tracks.track));
    });

  return (
    <HashRouter
        hashType={"slash"}
        basename={"/room4test"}
    >
        <Route exact path='/'>
            <Button className='search-button' onClick={() => changeSearch(true)}><i className="fas fa-search"> </i></Button>
            {search && <Redirect to='/search'/>}
            <div className='app-main'>
                <h1 className='app-main__h2'>Popular tracks</h1>
                <div className='app-main__tracks-box'>
                    {tracks && tracks.map((elem, index) => {
                        return(
                            <Track
                                key={index}
                                {...elem}
                            />
                        )
                    })}
                </div>
            </div>
        </Route>
        <Route path={`/${artistName}`}>
            <h1 className='app-main__h2'>Popular tracks</h1>
            <Artist name={artistName} />
        </Route>
        {artistName === 'artist' && <Redirect to={'/'} />}
        <Route path='/search'>
            <h1 className='app-main__h2'>Find tracks</h1>
            <Search />
        </Route>
    </HashRouter>
  );
};


export default App;
