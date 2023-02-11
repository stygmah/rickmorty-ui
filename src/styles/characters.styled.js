import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;


export const ResultsBox = styled.div`
  margin: 32px auto;
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const PaginationSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`;

export const PaginationButton = styled.button`
  font-size: 24px;
  background-color: white;
  height: 48px;
  width: 48px;
  border-radius: 100%;
  border: none;
  margin: auto;

  .arrow {
    border: solid var(--blue);
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
    margin-bottom: 1px;
  }
  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  &.right{
    transform: translateX(-10vw);
  }
  &.left{
    transform: translateX(10vw);
  }

`;