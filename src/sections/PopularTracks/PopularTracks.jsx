import React from 'react';
import { useHistory } from 'react-router';
import Button from "../../components/Button";
import Track from "../../components/Track";


const PopularTracks = ({tracks}) => {

    let history = useHistory();

    const handleOpenSearch = () => {
        history.push('/search');
    };

    return(
        <>
            <Button className='search-button' onClick={handleOpenSearch}><i className="fas fa-search"> </i></Button>
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
        </>
    )
};

export default PopularTracks;
