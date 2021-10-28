import React from 'react';
import styled from 'styled-components';
import env from '../../../env.json';
import { Container } from '../../Styled/Container';
import { PlayIcon } from '../../Styled/Icons/Icons';
import Fancybox from './Fancybox';

const {
    mainText,
    mainFonts: { title, subtitle }
} = env.fonts;
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
    font-weight: bold;
    margin-bottom: 23px;
`;
const SubTitle = styled.h2`
    font-size: ${subtitle.size};
    line-height: ${subtitle.line};
    font-weight: normal;
    margin-bottom: 11px;
    opacity: 0.5;
`;
const Description = styled.p`
    font-size: ${mainText.size};
    line-height: ${mainText.line};
    margin-bottom: 47px;

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
//********************************
const FilmInfo = ({ selectMovie }) => {
    const {
        enTitle,
        ruTitle,
        description,
        trailer
    } = selectMovie;

    return (
        <Film>
            <div>
                <SubTitle>{enTitle}</SubTitle>
                <Title>{ruTitle}</Title>
                <Description>{description}</Description>
            </div>
            <Fancybox>
                <Trailer data-fancybox="video-gallery"
                    className="button button--secondary"
                    data-src={trailer}
                >
                    <PlayIcon name={`Смотреть трейлер ${ruTitle}`}/>
                </Trailer>
            </Fancybox>
        </Film>
    );
}
export default FilmInfo;