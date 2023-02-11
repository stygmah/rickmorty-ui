import React from 'react';
import Image from 'next/image';
import {
  Container, 
  Card,
} from './styled';

const ResultCard = ({
  result
}) => {
  return (
    <Container href={`/character/${result.id}`}>
      <Card>
        <div>
          <Image src={result.image} height={120} width={120} alt={result.name}/>
        </div>
        <div>
          <p>{result.name.length > 12 ? `${result.name.substring(0, 12)}...` : result.name}</p>
        </div>
      </Card>
    </Container>
  );
};

export default ResultCard;