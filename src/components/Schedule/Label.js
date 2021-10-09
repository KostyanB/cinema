import styled from 'styled-components';
import env from '../../env.json';

const Label = styled.div`
    font-size: ${env.fonts.calendarFonts.label.size};
    line-height: ${env.fonts.calendarFonts.label.line};
    margin-bottom: 20px;
`;
export default Label;