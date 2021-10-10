import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Container } from '../Styled/Container';
import { ClockIcon } from '../Styled/Icons/Icons';
import RateIcon from '../../img/imdb.png';

const Wrapper = styled(Container)`
    display: flex;
    align-items: center;
    padding-bottom: 59px;
    border-bottom: 1px solid ${env.colors.rectangle};
`;
const Timing = styled.div`
    display: flex;
    align-items: center;

    span {
        margin-left: 14px;
        font-size: ${env.fonts.mainFont.size};
        line-height: ${env.fonts.mainFont.line};
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
    font-size: ${env.fonts.mainFonts.subtitle.size};
    line-height: ${env.fonts.mainFonts.subtitle.line};
    font-weight: bold;

    span {
        margin-left: 12px;
        font-size: ${env.fonts.mainFont.size};
        line-height: ${env.fonts.mainFont.line};
    }
`;

const Details = ({ time, rate }) => (
    <Wrapper>
        <Timing>
            <ClockIcon width={20} height={20}/>
            <span>{time} мин.</span>
        </Timing>
        <Rating>
            <img src={RateIcon} alt="Imdb rate"/>
            <Rate>{rate}<span>/ 10</span></Rate>
        </Rating>
    </Wrapper>
)
export default Details;