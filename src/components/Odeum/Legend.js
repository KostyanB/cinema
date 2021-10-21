import styled from 'styled-components';
import env from '../../env.json';
import { SeatIcon } from '../Styled/Icons/Icons';

const { size, line } = env.fonts.calendarFonts.label;
// styled
const Wrapper = styled.div`
    padding-top: 22px;
    display: flex;
    align-items: center;
    width: 95%;
    margin: 0 auto;

    span {
        display: flex;
        align-items: center;
        font-size: ${size};
        line-height: ${line};
        margin-left: 15px;
    }
    span:not(:last-of-type) {
        margin-right: 30px;
    }
`;

const Legend = () => {
    const {
        freePlace,
        selectedPlace,
        bookedPlace
    } = env.colors;

    return (
        <Wrapper>
            <SeatIcon name="Свободно" color={freePlace} width={36} height={29} />
            <span style={{color: freePlace}}>Свободно</span>
            <SeatIcon name="Выбрано" color={selectedPlace} width={36} height={29} />
            <span style={{color: selectedPlace}}>Выбрано</span>
            <SeatIcon name="Занято" color={bookedPlace} width={36} height={29} />
            <span style={{color: bookedPlace}}>Занято</span>
        </Wrapper>
    );
}
export default Legend;