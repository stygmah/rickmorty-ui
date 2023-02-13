import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  h1{
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  margin-top: 32px;
  background-color: #f5f5f5;
  padding: 16px 32px;
  border-radius: var(--border-radius);
  border: none;
  font-size: 18px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover{
    transform: translateY(-1px);
  }
`;
