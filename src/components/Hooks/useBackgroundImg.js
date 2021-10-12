import { useState } from 'react';

export const useBackgroundImg = () => {
    const [ backgroundImg, setBackgroundImg ] = useState('bg.jpg');

    return { backgroundImg, setBackgroundImg };
}