import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Container } from '../Styled/Container';
import { PlayIcon } from '../Styled/Icons/Icons';
import Fancybox from './Fancybox';
//env
const { size: mainSize, line: mainLine } = env.fonts.mainFont;
const { title, subtitle } = env.fonts.mainFonts;
//styled
const Film = styled(Container)`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    div {
        max-width: 570px;

        @media (max-width: 768px) {
            flex-basis: 100%;
            max-width: 100%;
        }
    }
`;
const Title = styled.h1`
    font-size: ${title.size};
    line-height: ${title.line};
    margin-bottom: 23px;
`;
const SubTitle = styled.small`
    font-size: ${subtitle.size};
    line-height: ${subtitle.line};
    margin-bottom: 11px;
    opacity: 0.5;
`;
const Description = styled.p`
    font-size: ${mainSize};
    line-height: ${mainLine};
    margin-bottom: 51px;

    @media (max-width: 768px) {
        flex-basis: 100%;
        margin-bottom: 20px;
    }
`;
const Trailer = styled.button`
    margin: auto;

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const FilmInfo = ({ selectMovie }) => {
    const { subtitle, title, description, trailer } = selectMovie;

    return (
        <Film>
            <div>
                <SubTitle>{subtitle}</SubTitle>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </div>
            <Fancybox>
                <Trailer data-fancybox="video-gallery"
                    className="button button--secondary"
                    data-src={trailer}
                >
                    <PlayIcon/>
                </Trailer>
            </Fancybox>
        </Film>
    );
}
export default FilmInfo;