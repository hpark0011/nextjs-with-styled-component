'use client';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

export default StyledButton;
