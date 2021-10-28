import styled from 'styled-components';
import env from '../../env.json';
import { SeatIcon } from '../Styled/Icons/Icons';

const { size, line } = env.fonts.calendarFonts.label;
// styled
const Wrapper = styled.div`
    padding-top: 22px;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`;
const Title = styled.span`
    display: flex;
        align-items: center;
        font-size: ${size};
        line-height: ${line};
        margin-left: 15px;

    &:not(:last-of-type) {
        margin-right: 30px;
    }
`;
const Seat = styled.div`
    width: 36px;
    height: 29px;
`;
//*****************************
const Legend = () => {
    const {
        freePlace,
        selectedPlace,
        bookedPlace
    } = env.colors;

    return (
        <Wrapper>
            <Seat>
                <SeatIcon name="Свободно" color={freePlace} width={36} height={29} />
            </Seat>
            <Title style={{color: freePlace}}>Свободно</Title>
            <Seat>
                <SeatIcon name="Выбрано" color={selectedPlace} width={36} height={29} />
            </Seat>
            <Title style={{color: selectedPlace}}>Выбрано</Title>
            <Seat>
                <SeatIcon name="Занято" color={bookedPlace} width={36} height={29} />
            </Seat>
            <Title style={{color: bookedPlace}}>Занято</Title>
        </Wrapper>
    );
}
export default Legend;