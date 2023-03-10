import Card from '@/components/Card';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 0;
`;

export const LoginCard = styled(Card)`
  display: inline-block;
  padding: 32px;
  h3{
    text-align: center;
    margin-bottom: 32px;
  }
`;
export const FieldContainer = styled.div`
  width: 20vw;
  margin-bottom: 16px;
  position: relative;
  label{
    display: block;
    color: #555;
    font-size: 14px;
  }
  input{
    display: block;
    width: 100%;
    font-size: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
    box-shadow:inset 0 0 10px 1px rgba(0,0,0,0.1);
    background: #fff;
  }
  span{
    display: block;
    font-size: 12px;
    color: #aaa;
  }
  .error{
    color: #f00;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  background: var(--blue);
  color: #fff;
  padding: 16px 0;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:disabled{
    opacity: 0.3;
  }
  &:hover{
    transform: translateY(-1px);
  }
`;