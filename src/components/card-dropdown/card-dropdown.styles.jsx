import styled from "styled-components/macro";
import { BaseButton, GoogleSignInButton, GoogleRedSignInButton, InvertedButton } from "..//button/button.styles";

export const CardDropdownContainer = styled.div`
    position: absolute;
    width: 280px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${GoogleRedSignInButton},
  ${InvertedButton}{
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;

 
`

export const CardItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`
