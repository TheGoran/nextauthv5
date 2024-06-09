
//Importing custom font
import { Poppins } from "next/font/google";
//Importing Utils CN so we can combine the font with the rest of the classes.
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
//Login component
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins ({
  subsets: ["latin"],
  weight: ["600"]
})
export default function Home() {
  return (
    
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-600 to-gray-900">

      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl  font-extrabold text-white drop-shadow-2xl",
          font.className,
   )}>
          [🔐Auth]
        </h1>
        <p className="text-white text-lg text-center">
         A simple authentication service
        </p>
        <div>
        <LoginButton>
          <Button variant="secondary" size="lg" className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-yellow-500 to-yellow-600 text-2xl text-gray-100 font-extrabold drop-shadow-2xl ">
            Sign in
          </Button>
          </LoginButton>
        </div>
      </div>

    </main>
  );
}
