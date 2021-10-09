import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Container } from '../Styled/Container';
import { PlayIcon } from '../Styled/Icons/Icons';

const Film = styled(Container)`
    display: flex;
    align-items: center;

    div {
        max-width: 570px;
    }
`;
const Title = styled.h1`
    font-size: ${env.fonts.mainFonts.title.size};
    line-height: ${env.fonts.mainFonts.title.line};
    margin-bottom: 23px;
`;
const SubTitle = styled.small`
    font-size: ${env.fonts.mainFonts.subtitle.size};
    line-height: ${env.fonts.mainFonts.subtitle.line};
    margin-bottom: 11px;
    opacity: 0.5;
`;
const Description = styled.p`
    font-size: ${env.fonts.mainFont.size};
    line-height: ${env.fonts.mainFont.line};
    margin-bottom: 51px;
`;
const Trailer = styled.a`
    margin: auto;
`;

const FilmInfo = ({ subtitle, title, description }) => (
    <Film>
        <div>
            <SubTitle>{subtitle}</SubTitle>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </div>
        <Trailer href="#"><PlayIcon/></Trailer>
    </Film>
)
export default FilmInfo;