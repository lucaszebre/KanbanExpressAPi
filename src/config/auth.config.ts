import GitHub from "@auth/express/providers/github"
import Google from "@auth/express/providers/google"
import LinkedIn from "@auth/express/providers/linkedin"


export const authConfig = {
  trustHost: true,
  providers: [ 
    GitHub,
    Google,
    LinkedIn,
  ],
  secret:process.env.AUTH_SECRET,
  
  
}
