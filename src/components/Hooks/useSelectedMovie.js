import { useState } from 'react';

export const useSelectedMovie = () => {
    const [ selectedMovie, setSelectedMovie ] = useState(null);

    return { selectedMovie, setSelectedMovie };
};