import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  position: absolute;
  background-color: var(--light);
  padding: 8px 16px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  display: flex;
  justify-content: space-between;
`;

export const UserInfo = styled.button`
  background-color: var(--white);
  border: none;
  cursor: pointer;

`;
export const UserInfoMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 16px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  padding: 4px 12px;
  overflow: hidden;
  ${props => props.visible ? 'height: auto;' : 'height: 0; padding: 0;'}
  transition: all 0.2s ease-in-out;
  button{
    background-color: var(--white);
    border: none;
    cursor: pointer;
  }
`;