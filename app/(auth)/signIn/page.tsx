import SignInForm from "@/app/components/auth/sign-in-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";


export default async function SignInPage(){
       // Si ya está logueado, redirigir al dashboard
          const session= await auth()
          if(session?.user) redirect('/dashboard')
    return(
        <Suspense>
           <SignInForm/>
        </Suspense>
       
    )
}