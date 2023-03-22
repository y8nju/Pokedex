import React from 'react';
import styled from '@emotion/styled/macro';

import { Ability, Color, Type } from '../types';
import { InferencePriority } from 'typescript';
import { mapColorToHex, mapTypeToHex } from '../utils';
import PokedexData from './PokedexData';
import Abilities from './Abilities';

type Props = {
    isLoading: boolean;
    color?: Color;
    growthRate?: string;
    flavorText?: string;
    genderRate?: number;
    isLegendary?: boolean;
    isMythical?: boolean;
    types?: Array<Type>;
    weight?: number;
    height?: number;
    baseExp?: number;
    abilities?: Array<Ability>;
  }
  
  const Container = styled.article`
    padding: 20px;
  `;
  
  const FlavorText = styled.p`
    margin: 0 auto;
    word-break: break-word;
    font-size: 14px;
    color: #374151;
  `;
  
  const TypeWrapper = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  `;
  
  const TypeList = styled.div`
    display: flex;
    margin-top: 16px;
    ${TypeWrapper} + ${TypeWrapper} {
      margin-left: 8px;
    }
  `;
  
  const TypeImage = styled.img`
    height: 12px;
  `;
  
  const TypeLabel = styled.span`
    margin-left: 4px;
    color: #fff;
    font-size: 10px;
  `;
  
  const ImageWrapper = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const Image = styled.img`
    width: 120px;
    height: 120px;
    object-fit: contain;
  `;

const About: React.FC<Props> = ({
    isLoading, 
    color,
    growthRate,
    flavorText,
    genderRate,
    isLegendary,
    isMythical,
    types,
    weight,
    height,
    baseExp,
    abilities
}) => {
    const rarity = isLegendary ? 'Legendary' : isMythical ? 'Mythical' : 'Normal';

    return (
        <Container>
            <FlavorText>{flavorText}</FlavorText>
            <TypeList>
                {types?.map(({type}, idx) => (
                    <TypeWrapper key={idx} color={mapTypeToHex(type.name)}>
                        <TypeImage src={`/assets/${type.name}.svg`} />
                        <TypeLabel>{type.name.toUpperCase()}</TypeLabel>
                    </TypeWrapper>
                ))}
            </TypeList>
            <PokedexData 
                weight={weight}
                height={height}
                genderRate={genderRate}
                growthRate={growthRate}
                baseExp={baseExp}
                rarity={rarity}
                color={color}
            />
            {abilities && <Abilities abilities={abilities} color={color} />}
        </Container>
    )

}
export default About;