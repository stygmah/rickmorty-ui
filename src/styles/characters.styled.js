import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
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

  transition: all 0.3s ease;
  cursor: pointer;
  &:hover{
    transform: translateY(-1px);
  }

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


`;