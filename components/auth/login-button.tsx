"use client";

import { useRouter } from "next/navigation";

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
    const router = useRouter();
    const onClickLogin  = () => {
        router.push("/auth/login")
    }

    if (mode ==="modal") {
        return (
            <span>
                TODO: Implement modal
            </span>
        )
    }

    return (
        <span onClick={onClickLogin} className="cursor-pointer">
            {children}
        </span>
    )
}