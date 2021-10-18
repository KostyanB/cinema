import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SelectButton from './SelectButton';
import SelectList from './SelectList';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;
//******************************* */
const Selector = ({
    items,
    handleSelectParam,
    activeSelector,
    name
}) => {
    const selectorName = `${name}-selector`;
    const thisSelector = useRef(null);
    const [ openSelector, setOpenSelector ] = useState(false);

    // закр селектор и передаем выбранный
    const handleSelection = selected => {
        setOpenSelector(false);
        handleSelectParam(selected);
    };

    // откр/закр кликом по кнопке
    const toggleSelector = () => setOpenSelector(!openSelector);

    // утановка 1-го значения по-умолчанию
    // useEffect(() => {
    //     !activeSelector && handleSelectParam(items[0]);
    // }, [items, activeSelector, handleSelectParam]);

    // клик вне селектора
    useEffect(() => {
        const onClick = e => {
            // закрываем, если мимо селектора
            if (!thisSelector.current?.contains(e.target) && !e.target.closest(`.${selectorName}`)) {
                setOpenSelector(false);
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [thisSelector, setOpenSelector, selectorName]);

    return (
        <Wrapper ref={thisSelector}>
            <SelectButton  isOpen={openSelector}
                toggleSelector={toggleSelector}
                title={activeSelector}
            />
            {openSelector &&
            <SelectList className={selectorName}
                items={items}
                handleSelection={handleSelection}
            />}
        </Wrapper>
    );
}
export default Selector;