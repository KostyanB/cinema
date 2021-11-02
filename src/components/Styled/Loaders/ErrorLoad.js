import styled from 'styled-components';
import env from '../../../env.json';
import LoadContainer from './LoadContainer';

const ErrorContainer = styled(LoadContainer)`
    padding-top: 200px;
    color: ${env.colors.alertColor};
    font-size: 30px;
    text-align: center;
`;

const ErrorLoad = ({ text = 'Sorry, nework error. We will fix it soon...' }) => (
    <ErrorContainer>
        {text}
    </ErrorContainer>
);
export default ErrorLoad;