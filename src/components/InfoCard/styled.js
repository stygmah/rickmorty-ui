import styled from 'styled-components';
import CardComponent from '../Card';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20vw;

`;

export const Card = styled(CardComponent)`
  display: inline-grid;
  gap: 12px;
  img{
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    height: 100%;
  }
`;

export const CardLeft = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  img{
    height: 100%;
  }
`;

export const CardRight = styled.div`
  padding: 24px;
  grid-column-start: 3;
  grid-column-end: 4;
  min-width: 450px;
`;

export const CardRightHeader = styled.div`
  margin-bottom: 24px;
`;

export const InfoField = styled.div`
  margin-bottom: 12px;
  p{
    &:first-child {
      color: grey;
      text-transform: capitalize;
    }
    &:last-child {

    }
  }
`;