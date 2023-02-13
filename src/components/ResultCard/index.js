import Image from 'next/image';
import PropTypes from 'prop-types';
import {
  Container, 
  Card,
} from './styled';

const ResultCard = ({ result }) => {
  return (
    <Container href={`/character/${result.id}`}>
      <Card>
        <div>
          <Image src={result.image} height={120} width={120} alt={result.name} />
        </div>
        <div>
          <p>
            {result.name.length > 12
              ? `${result.name.substring(0, 12)}...`
              : result.name}
          </p>
        </div>
      </Card>
    </Container>
  );
};

ResultCard.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default ResultCard;