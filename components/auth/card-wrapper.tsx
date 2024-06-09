"use client";
import { Header } from "./header";
import { Social } from "./social";

import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
 } from "../ui/card";

//define wrapper props
interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}
//export and  extract and destruct the props
export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
//here we will return/render the shadcn card we installed
// Remember CardHeader is from shadcn
//Header is the reusable header we created. 
    return(
        <Card className="w-[400px] shadow-md bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-600 to-gray-900">
            <CardHeader>
                <Header 
                    label={headerLabel}
                ></Header>
            </CardHeader>
            <CardContent>
                { children }
            </CardContent>
            {//if showSocial go ahead and render the following
            showSocial && (
                <CardFooter>
                    <Social />
                        
                </CardFooter>
            )

            }
         </Card>
    )
}