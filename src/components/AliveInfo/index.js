import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  StatusIndicator,
} from './styled';

const STATUS_COLORS = {
  Alive: '#00FF2D',
  Dead: '#FF2D00',
  unknown: '#B6B6B6',
};

const AliveInfo = ({ status }) => {
  return (
    <Container>
      <StatusIndicator color={STATUS_COLORS[status]} />
      <p>{status}</p>
    </Container>
  );
};

AliveInfo.propTypes = {
  status: PropTypes.oneOf(['Alive', 'Dead', 'unknown']).isRequired,
};

export default AliveInfo;