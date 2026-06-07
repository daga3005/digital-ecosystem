
import SignUpForm from "@/app/components/auth/sign-up-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";


export default async function SignUpPage(){
   
    // Si ya está logueado, redirigir al dashboard
    const session= await auth()
    if(session?.user) redirect('/dashboard')
    return(
        <Suspense>
           <SignUpForm/>
        </Suspense>
       
    )
}