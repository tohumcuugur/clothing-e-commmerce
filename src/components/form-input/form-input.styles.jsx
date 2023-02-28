import styled, { css } from "styled-components/macro";

const subColor = "grey"
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 14px;
  color: ${mainColor};
  font-weight: bold;
  letter-spacing: 1px;
`
//css'i birden fazla componentte kullanmak istersek scss'teki mixin yapısına benzer şekilde üstteki gibi kullanılabilir.
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}; //scss mixin yapısı bu şekilde styled componentste kullanılabilir.

`
export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }
  &:focus ~ ${FormInputLabel}{
    ${shrinkLabelStyles};
  }
`
export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  input[type = 'password'] {
    letter-spacing: 0.3em;
  }
`