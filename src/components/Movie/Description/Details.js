import React from 'react';
import styled from 'styled-components';
import env from '../../../env.json';
import { Container } from '../../Styled/Container';
import { ClockIcon } from '../../Styled/Icons/Icons';
import RateIcon from '../../../img/imdb.png';

const {
    mainText: { size: mainSize, line: mainLine },
    mainFonts: {
        subtitle: { size: subSize, line: subLine }
    }
} = env.fonts;
//styled
const Wrapper = styled(Container)`
    display: flex;
    align-items: center;
    padding-bottom: 59px;
    border-bottom: ${env.colors.underline};
`;
const Timing = styled.div`
    display: flex;
    align-items: center;

    span {
        margin-left: 14px;
        font-size: ${mainSize};
        line-height: ${mainLine};
    }
`;
const Rating = styled.div`
    display: flex;
    align-items: center;
    margin-left: 34px;

    img {
        width: 35px;
        height: 18px;
    }
`;
const Rate = styled.p`
    margin-left: 12px;
    font-size: ${subSize};
    line-height: ${subLine};
    font-weight: bold;

    span {
        margin-left: 12px;
        font-size: ${mainSize};
        line-height: ${mainLine};
    }
`;
//******************************
const Details = ({ selectMovie }) => {
    const {
        timing,
        imdbRate
    } = selectMovie;

    return (
        <Wrapper>
            <Timing>
                <ClockIcon width={20} height={20}/>
                <span>{timing} мин.</span>
            </Timing>
            <Rating>
                <img src={RateIcon} alt="Imdb imdbRate"/>
                <Rate>
                    {imdbRate}<span>/ 10</span>
                </Rate>
            </Rating>
        </Wrapper>
    );
}
export default Details;