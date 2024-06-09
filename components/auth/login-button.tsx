"use client";

//Define props and types
interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

//Export export const LoginButton = () => {}and extract props export const LoginButton = ({props}) => {}
export const LoginButton = ({
    children,
    mode = "redirect",  //setting default value to be redirect
    asChild
}: LoginButtonProps) => {
    const whenClickeddy  = () => {
        console.log("LOGIN BUTTON WAS CLICKEDY");
    }
    return (
        <span onClick={whenClickeddy} className="cursor-pointer">
            {children}
        </span>
    )
}