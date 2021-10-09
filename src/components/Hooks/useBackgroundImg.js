import { useState } from 'react';

export const useBackgroundImg = () => {
    const [ backgroundImg, setBackgroundImg ] = useState(null);

    return { backgroundImg, setBackgroundImg };
}