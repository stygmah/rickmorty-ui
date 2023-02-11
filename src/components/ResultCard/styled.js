import Link from "next/link";
import styled from "styled-components";
import CardContainer from "../Card";

export const Container = styled(Link)`
  display: inline-block;
`;

export const Card = styled(CardContainer)`
  text-align: center;
  transition: all .2s ease-in-out; 
  &:hover{
    transform: scale(1.02);
  }
  img{
    border-radius: var(--border-radius)  var(--border-radius) 0 0;
  }
  p{
    padding: 8px;
    font-size: 12px;
  }
`