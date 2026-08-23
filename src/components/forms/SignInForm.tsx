"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardAction
} from "@/components/ui/card"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { USEREMAILCOOKIE } from "@/appConsts"
import Cookies from 'js-cookie'
import { useNavigate, type NavigateFunction } from "react-router"
import axios from "axios";
import { AppConfig } from "@/config/config"
import { useState } from "react"
import SignUpForm from "./SignUpForm"

const formSchema = z.object({
    email: z
        .email("Invalid email")
        .max(255, "Last name must be at most 255 characters."),
    password: z
        .string().trim()
        .regex(/^\S+$/, "Password must not contain spaces")
        .max(32, "First name must be at most 32 characters."),
})

const SignInForm = () => {
    
    const [isSignup, setIsSignup] = useState(false);

    const navigate: NavigateFunction = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    async function onSubmit(data: z.infer<typeof formSchema>) {
        Cookies.set(USEREMAILCOOKIE, data.email)
        try{
            const response = await axios.post<any>(`${AppConfig.backendBaseUrl}/api/login`, data)
            console.log("response", response)
        } catch (error) {
            console.error("Error during login:", error);
            toast.info("Login failed. Please check your credentials and try again.");
            return;
        }

        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-black p-4 text-code-foreground">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "top-center",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
        navigate("/", {replace:true})
    }

    return (
        <>
            {isSignup && <SignUpForm signIn={()=>setIsSignup(prev => !prev)}/>}
            {!isSignup &&
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Login to your account</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                        <CardAction>
                            <Button variant="link" onClick={() => setIsSignup(prev => !prev)}>
                                Sign Up
                            </Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <form id="hd-login-form" onSubmit={handleSubmit(onSubmit)}>
                            <FieldGroup>
                                <Field data-invalid={!!errors.email}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        {...register("email")}
                                        id="form-rhf-demo-title"
                                        aria-invalid={!!errors.email}
                                        placeholder="Enter email address"
                                        autoComplete="off"
                                    />

                                    {errors.email && (
                                        <FieldError errors={[errors.email]} />
                                    )}
                                </Field>
                                <Field data-invalid={!!errors.password}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Password
                                    </FieldLabel>
                                    <Input
                                    {...register("password", {
                                            onChange: (e) => {
                                            e.target.value = e.target.value.replace(/\s/g, "");
                                            },
                                        })}
                                        id="form-rhf-demo-title"
                                        aria-invalid={!!errors.password}
                                        placeholder="Enter password"
                                        autoComplete="off"
                                        maxLength={32}

                                    />

                                    {errors.password && (
                                        <FieldError errors={[errors.password]} />
                                    )}
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Field>
                            <Button variant="default" type="submit" form="hd-login-form">
                                Submit
                            </Button>
                            <Button type="button" variant="outline" onClick={() => form.reset()}>
                                Reset
                            </Button>
                        </Field>
                    </CardFooter>
                </Card>
            }
        </>

    )
}

export default SignInForm