import styled from "styled-components/macro";

export const BaseButton = styled.button`
    min-width: 150px;
    height: 50px;
    letter-spacing: 0.5px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: block;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;
export const GoogleSignInButton = styled(BaseButton)`
      background-color: #4285f4;
      color: white;
      &:hover {
        background-color: #357ae8;
        border: none;
      }
    
`
export const GoogleRedSignInButton = styled(BaseButton)`
    background-color: #15a841;
    color: white;

    &:hover {
      background-color: #1dda55;
      border: none;
    }
`
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

`