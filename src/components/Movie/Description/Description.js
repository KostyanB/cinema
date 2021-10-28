import React from 'react';
import FilmInfo from './FilmInfo';
import Details from './Details';

const Description = ({selectMovie}) => (
    <>
        <FilmInfo selectMovie={selectMovie}/>
        <Details selectMovie={selectMovie}/>
    </>
)
export default Description;