import React from 'react';
import {
  Container,
  StatusIndicator,
} from './styled';


const STATUS_COLORS = {
  Alive: '#00FF2D',
  Dead: '#FF2D00',
  unknown: '#B6B6B6',
}

const AliveInfo = ({
  status
}) => {
  return (
    <Container>
      <StatusIndicator color={STATUS_COLORS[status]}/> 
      {status === 'Alive' ? <p>Alive</p> : <p>Dead</p>}
    </Container>
  );
};

export default AliveInfo;