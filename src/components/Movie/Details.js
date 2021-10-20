import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Container } from '../Styled/Container';
import { ClockIcon } from '../Styled/Icons/Icons';
import RateIcon from '../../img/imdb.png';

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
        font-size: ${props => props.font.mainSize};
        line-height: ${props => props.font.mainLine};
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
    font-size: ${props => props.fonts.subSize};
    line-height: ${props => props.fonts.subLine};
    font-weight: bold;

    span {
        margin-left: 12px;
        font-size: ${props => props.fonts.mainSize};
        line-height: ${props => props.fonts.mainLine};
    }
`;

const Details = ({ selectMovie }) => {
    const {
        size: mainSize,
        line: mainLine
    } = env.fonts.mainFont;
    const {
        size: subSize,
        line: subLine
    } = env.fonts.mainFonts.subtitle;
    const {
        timing,
        imdbRate
    } = selectMovie;

    return (
        <Wrapper>
            <Timing font={{mainSize, mainLine}}>
                <ClockIcon width={20} height={20}/>
                <span>{timing} мин.</span>
            </Timing>
            <Rating>
                <img src={RateIcon} alt="Imdb imdbRate"/>
                <Rate fonts={{mainSize, mainLine, subSize, subLine}}>
                    {imdbRate}<span>/ 10</span>
                </Rate>
            </Rating>
        </Wrapper>
    );
}
export default Details;