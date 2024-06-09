"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
    return (
        <div className="flex items-center justify-center w-full gap-x-12 ">
         <Button
            size="icon"            
            variant="ghost"
            onClick={() => {}}
         >
            <FcGoogle
                className="h-10 w-10 "
            />
         </Button>
         <Button 
            size="icon"           
            variant="ghost"
            onClick={() => {}}
         >
            <FaGithub
                className="h-10 w-10 "
            />
         </Button>
        </div>
    )
}