import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: left;
  p{
    margin-left: 8px;
    text-transform: capitalize;
  }
`;

export const StatusIndicator = styled.div`
margin-top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;