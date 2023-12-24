import React from "react";
import { LoginBody,RegisterBody,useRequestType } from "../utils/types";
import { useRouter } from 'next/navigation'



export const useLogin = () => {
    const router = useRouter()
    const sendLoginRequest = async (reqBody:LoginBody) => {
        const body = JSON.stringify(reqBody)
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/login`,{
            method:'POST',
            body:body,
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json())
        .catch(err => console.log(err))
        return res
    }
    return {sendLoginRequest}
}

export const useRegister = () => {
    const router = useRouter()
    const sendRegisterRequest = async (reqBody:RegisterBody) => {
        const body = JSON.stringify(reqBody)
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/signup/`,{
             method:'POST',
            body:body,
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json()).catch(err => console.log(err))
        return res
       
    }
    return {sendRegisterRequest}
}