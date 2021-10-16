import styled from 'styled-components';
import env from '../../env.json';

const { size, line } = env.fonts.calendarFonts.label;

const Label = styled.div`
    font-size: ${size};
    line-height: ${line};
    margin-bottom: 20px;
`;
export default Label;