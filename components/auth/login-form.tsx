
import { CardWrapper } from "./card-wrapper"
export const LoginForm = () => {
  return (
    <CardWrapper 
      headerLabel="Welcome back Jack...or was it John❔🥴"
      backButtonLabel="Dont have an account❓"
      backButtonHref="/auth/register"
      showSocial
    >
      Login-form!
    </CardWrapper>
  )
}
