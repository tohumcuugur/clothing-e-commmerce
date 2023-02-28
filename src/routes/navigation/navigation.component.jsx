import { Fragment, useContext } from "react";
import {Outlet } from "react-router-dom";

import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

import { ReactComponent as Logo } from "..//..//assets/icons8-hitfilm-pro.svg";
import { UserContext } from "../../contexts/user.context";
import { CardContext } from "../../contexts/card.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation.styles";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    // console.log(currentUser);
    const { isCardOpen } = useContext(CardContext);


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {
                        currentUser ?
                            (<NavLink as="span" onClick={signOutUser}>SING OUT</NavLink>)//styled komponent kullanırken tanımladığımız stilleri sadece tanımladığımız isim komponentine kullanmamıza gerek kalmaz buradaki örnekte olduğu gibi Link etiketlerini styled komponentlerde Navlink olarak tanımlayıp still tanımlamalarını yaptık. fakat öncesinde bu etiken span etiketiydi.Bunuda as="span" as string göndererek html elementine çevirmemizi sağlar.
                            : (<NavLink to="/auth">SIGN IN</NavLink>)
                    }
                    <CardIcon />
                </NavLinks>
                {isCardOpen && <CardDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;

//{isCardOpen && <CardDropdown />} iscard open true ise carddropdown'u indirip açacak.