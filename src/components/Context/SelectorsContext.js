import React, { createContext } from 'react';
import { useSelectors } from '../Hooks/useSelectors';

export const SelectorsContext = createContext();

export const SelectorsContextProvider = (props) => {
    const selectors = useSelectors();

    return (
        <SelectorsContext.Provider  value={{selectors}}>
            {props.children}
        </SelectorsContext.Provider>
    );
};