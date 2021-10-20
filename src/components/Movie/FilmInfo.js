import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Container } from '../Styled/Container';
import { PlayIcon } from '../Styled/Icons/Icons';
import Fancybox from './Fancybox';

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
    font-size: ${props => props.size};
    line-height: ${props => props.line};
    margin-bottom: 23px;
`;
const SubTitle = styled.small`
    font-size: ${props => props.size};
    line-height: ${props => props.line};
    margin-bottom: 11px;
    opacity: 0.5;
`;
const Description = styled.p`
    font-size: ${props => props.size};
    line-height: ${props => props.line};
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
    const {
        size: mainSize,
        line: mainLine
    } = env.fonts.mainFont;
    const {
        title,
        subtitle
    } = env.fonts.mainFonts;
    const {
        enTitle,
        ruTitle,
        description,
        trailer
    } = selectMovie;

    return (
        <Film>
            <div>
                <SubTitle size={subtitle.size} line={subtitle.line}>
                    {enTitle}
                </SubTitle>
                <Title size={title.size} line={title.line}>
                    {ruTitle}
                </Title>
                <Description size={mainSize} line={mainLine}>
                    {description}
                </Description>
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