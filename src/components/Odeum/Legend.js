import styled from 'styled-components';
import env from '../../env.json';
import { SeatIcon } from '../Styled/Icons/Icons';

const { underline, free, orange, booked } = env.colors;
const { size, line } = env.fonts.calendarFonts.label;

const Wrapper = styled.div`
    padding-top: 22px;
    /* border-top: ${underline}; */
    display: flex;
    align-items: center;
    width: 1018px;
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

    @media (max-width: 1240px) {
        /* width: 95%; */
    }
`;

const Legend = () => (
    <Wrapper>
        <SeatIcon name="Свободно" color={free} width={36} height={29} />
        <span style={{color: free}}>Свободно</span>
        <SeatIcon name="Выбрано" color={orange} width={36} height={29} />
        <span style={{color: orange}}>Выбрано</span>
        <SeatIcon name="Занято" color={booked} width={36} height={29} />
        <span style={{color: booked}}>Занято</span>
    </Wrapper>
)
export default Legend;