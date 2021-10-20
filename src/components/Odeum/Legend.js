import styled from 'styled-components';
import env from '../../env.json';
import { SeatIcon } from '../Styled/Icons/Icons';

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
        font-size: ${props => props.size};
        line-height: ${props => props.line};
        margin-left: 15px;
    }
    span:not(:last-of-type) {
        margin-right: 30px;
    }
`;

const Legend = () => {
    const {
        free,
        orange,
        booked
    } = env.colors;
    const {
        size,
        line
    } = env.fonts.calendarFonts.label;

    return (
        <Wrapper size={size} line={line}>
            <SeatIcon name="Свободно" color={free} width={36} height={29} />
            <span style={{color: free}}>Свободно</span>
            <SeatIcon name="Выбрано" color={orange} width={36} height={29} />
            <span style={{color: orange}}>Выбрано</span>
            <SeatIcon name="Занято" color={booked} width={36} height={29} />
            <span style={{color: booked}}>Занято</span>
        </Wrapper>
    );
}
export default Legend;