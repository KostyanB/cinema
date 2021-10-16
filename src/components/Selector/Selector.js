import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import SelectButton from './SelectButton';
import SelectList from './SelectList';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;
const List = styled.ul`
    display: block;
    position: absolute;
    max-height: 79px;
    overflow: auto;
    width: 100%;
    z-index: 10;
    background: ${env.colors.selectorFill};
    border: 1px solid ${env.colors.rectangle};
    border-top: none;
    padding: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 8px 18px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${env.colors.orange};
        border-radius: 100px;
    }
`;
const Li = styled.li`
    cursor: pointer;

    &:not(:last-of-type) {
        padding-bottom: 8px;
    }

    &:hover {
        color: ${env.colors.orange};
    }
`;
//******************************* */
const Selector = ({
    items,
    isOpen,
    handleButton,
    handleSelector,
    title,
    handleOutsideClick
}) => {
    // клик вне компонента
    const rootEl = useRef(null);
    useEffect(() => {
        const onClick = e => {
            // true, если мимо селектора
            if (!rootEl.current?.contains(e.target) && !e.target.closest('.selector')) {
                handleOutsideClick();
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [rootEl, handleOutsideClick]);

    return (
        <Wrapper ref={rootEl}>
            <SelectButton  isOpen={isOpen}
                handleFn={handleButton}
                title={title}
            />
            {isOpen &&
            <SelectList className="selector" items={items} handleSelector={handleSelector}/>}

        </Wrapper>
    );
}
export default Selector;