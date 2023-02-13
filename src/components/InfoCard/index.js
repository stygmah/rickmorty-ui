import Image from 'next/image';
import AliveInfo from '../AliveInfo';
import PropTypes from 'prop-types';
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

const InfoCard = ({ character }) => {
  return character ? (
    <Container>
      <Card>
        <CardLeft>
          {character.image && (
            <Image src={character.image} alt={character.name} width={460} height={460} />
          )}
        </CardLeft>
        <CardRight>
          <CardRightHeader>
            <h1>{character.name}</h1>
            <AliveInfo status={character.status} />
          </CardRightHeader>
          {BASIC_INFO.map((info) => {
            return character[info] ? (
              <InfoField key={nanoid()}>
                <p>{info}:</p>
                {character[info].name ? (
                  <p>{character[info].name}</p>
                ) : (
                  <p>{character[info]}</p>
                )}
              </InfoField>
            ) : null;
          })}
        </CardRight>
      </Card>
    </Container>
  ) : null;
};

InfoCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    image: PropTypes.string,
    gender: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ name: PropTypes.string })]),
    species: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ name: PropTypes.string })]),
    type: PropTypes.string,
    origin: PropTypes.shape({ name: PropTypes.string }),
    location: PropTypes.shape({ name: PropTypes.string }),
  }),
};

InfoCard.defaultProps = {
  character: {
    name: null,
    status: null,
    image: null,
    gender: null,
    species: null,
    type: null,
    origin: null,
    location: null,
  },
};

export default InfoCard;
