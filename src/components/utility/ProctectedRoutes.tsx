
import React from "react"
import Cookies from "js-cookie"
import { USEREMAILCOOKIE } from "@/appConsts"
import { Navigate } from "react-router"

interface ProtectedRoutesProps{
    children: React.ReactNode
}
function ProctectedRoutes({children}: ProtectedRoutesProps) {
    const loggedIn: string|undefined= Cookies.get(USEREMAILCOOKIE)
    if (loggedIn != undefined) {
        return <>{children}</>
    }else{
        return <Navigate to={"/signIn"} replace/>
    }
}

export default ProctectedRoutes