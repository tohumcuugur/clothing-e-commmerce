import { BaseButton, GoogleSignInButton, GoogleRedSignInButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    googleRed: "google-red-sign-in",
    inverted: "inverted",
}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ( // eğer import ettiğim hiç bir component gönderilmezse BaseButton GoogleSingInButton vs default olarak base olan butonu al.
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.googleRed]: GoogleRedSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

    }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}
export default Button;