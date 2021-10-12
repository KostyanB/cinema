import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { SeatIcon } from '../Styled/Icons/Icons';
import { useSchema } from '../Hooks/useSchema';

const Wrapper = styled.div`
    width: 1024px;
    margin: 0 auto 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const BackWrapper = styled(Wrapper)`
    justify-content: space-between;

    &:nth-of-type(3) {
        border-bottom: ${env.colors.underline};
    }

    @media (max-width: 1240px) {
        justify-content: center;
    }
`;
const BigBlock = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-top: -10px;
    display: flex;
    flex-wrap: wrap;
`;
const SmallBlock = styled(BigBlock)`
    margin-bottom: 54px;

    @media (max-width: 1240px) {
        &:first-of-type {
            margin-right: 20px;
        }
    }
`;
const PlaceWrap = styled.div`
    width: 49px;
    height: 49px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${env.colors.free};

    &:hover , :active {
        color: ${env.colors.orange};
    }
`;

const Place = ({ name, row, place, color}) => (
    <PlaceWrap dataRow={row} dataPlace={place}>
        <SeatIcon name={name} width={36} height={29}/>
    </PlaceWrap>
);


const SeatBlock = () => {
    const { sizes, places } = useSchema();

    const {
        frontHeight,
        frontWidth,
        backHeight,
        backLeftWidth,
        backRightWidth
    } = sizes;
    const {
        frontPlaces,
        backLeftPlaces,
        backRightPlaces
    } = places;

    return (
        <>
        <Wrapper >
            <BigBlock width={frontWidth} height={frontHeight}>
                {frontPlaces && frontPlaces.map(item =>
                    <Place key={`${item[0]}-${item[1]}`}
                        name={`ряд ${item[0]}, место ${item[1]}`}
                        row={item[0]}
                        place={item[1]}
                        color={env.colors.free}
                    />
                )}
            </BigBlock>
        </Wrapper>
        <BackWrapper height={backHeight}>
            <SmallBlock width={backLeftWidth}>
            {backLeftPlaces && backLeftPlaces.map(item =>
                    <Place key={`${item[0]}-${item[1]}`}
                        name={`ряд ${item[0]}, место ${item[1]}`}
                        row={item[0]}
                        place={item[1]}
                        color={env.colors.free}
                    />
                )}
            </SmallBlock>
            <SmallBlock width={backRightWidth}>
            {backRightPlaces && backRightPlaces.map(item =>
                    <Place key={`${item[0]}-${item[1]}`}
                        name={`ряд ${item[0]}, место ${item[1]}`}
                        row={item[0]}
                        place={item[1]}
                        color={env.colors.free}
                    />
                )}
            </SmallBlock>
        </BackWrapper>
        </>
    );
}
export default SeatBlock;