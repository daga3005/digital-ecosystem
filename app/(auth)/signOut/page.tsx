import SignOutForm from "@/app/components/auth/sign-out-form";
import { Suspense } from "react";



export default async function SignOutPage(){
   
    // Si ya está logueado, redirigir al dashboard
    
    return(
        <Suspense>
           <SignOutForm/>
        </Suspense>
       
    )
}