import styled from "styled-components/macro";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
    width: 50px;
    height: 32px;
    font-size: 32px;
`
export const CardIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    /**
    ShippingIcon kullanmak yerine
    svg{
        width: 50px;
        height: 32px;
        font-size: 32px;
    }şeklindede yazabilirdik.
    */
`
export const ItemCount = styled.span`
  position: absolute;
  left: 50%;
  top: 56%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  font-weight: bold;
`