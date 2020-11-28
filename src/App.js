import React,{ useEffect } from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import './styles/index.scss';
import { useSelector,  useDispatch } from "react-redux";
import Artist from "./components/Artist";
import Search from "./sections/Search";
import PopularTracks from "./sections/PopularTracks";
import { fetchTracksData } from "./store/actions/actionCreator";


const App = () => {

    const dispatch = useDispatch();

    const fetchTracks = () => dispatch(fetchTracksData());

    useEffect(() => {
        fetchTracks();
    });

    const artistName = useSelector(({ getArtistData }) => getArtistData);
    const tracks = useSelector(({ getPopularTracks }) => getPopularTracks);

  return (
    <HashRouter
        hashType={"slash"}
        basename={"/room4test"}
    >
        <Route exact path='/'>
            <PopularTracks tracks={tracks} />
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
