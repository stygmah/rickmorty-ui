import React, {useState} from 'react';
import Image from 'next/image';
import AliveInfo from '../AliveInfo';
import {
  Container,
  Card,
  CardLeft,
  CardRight,
  InfoField,
  CardRightHeader,
} from './styled';
import { nanoid } from 'nanoid';

const BASIC_INFO = [
  'gender',
  'species',
  'type',
  'origin',
  'location',
];



const InfoCard = ({
  character,
}) => {
  const [episodeCounter, setEpisodeCounter] = useState(0);
  return character ? (
    <Container>
      <Card>
        <CardLeft>
          {character.image && <Image src={character.image} alt={character.name} width={460} height={460} />}
        </CardLeft>
        <CardRight>
          <CardRightHeader>
            <h1>{character.name}</h1>
            <AliveInfo status={character.status} />
          </CardRightHeader>
          {
            BASIC_INFO.map((info) => {
              return character[info] ? (
                <InfoField key={nanoid()}>
                  <p>{info}:</p>
                  {
                    character[info].name ? <p>{character[info].name}</p> : <p>{character[info]}</p>
                  }
                </InfoField>
              ): null;
            })
          }
        </CardRight>
      </Card>

    </Container>
  ): null;
};

export default InfoCard;