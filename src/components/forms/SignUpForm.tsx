"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardAction
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import * as z from "zod"

const formSchema = z.object({
    firstName: z.string().trim().max(30, "First name must be at most 30 characters."),
    lastName: z.string().trim().max(30, "Last name must be at most 30 characters."),
    email: z
        .email("Invalid email")
        .max(255, "Email must be at most 255 characters."),
    mobile: z.string().trim().max(10, "Mobile number must be at most 10 characters."),
})




const SignUpForm = ({ signIn }: { signIn: () => void }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobile: ""
        },
    })

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    async function onSubmit(data: z.infer<typeof formSchema>) {
            const { firstName, lastName, email, mobile } = data;
            const payload = {
                "first_name":firstName,
                "last_name":lastName,
                email,
                "mobile_number":mobile
            };

            // Handle form submission logic here
            console.log("Form submitted:", data, payload);

    }
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Sign Up for an account</CardTitle>
                <CardDescription>
                    Enter your email below to create an account
                </CardDescription>
                <CardAction>
                    <Button variant="link" onClick={signIn}>
                        Sign In
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form id="hd-signup-form" onSubmit={handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Field data-invalid={!!errors.firstName}>
                            <FieldLabel htmlFor="form-rhf-demo-title">
                                First Name
                            </FieldLabel>
                            <Input
                               {...register("firstName")}
                                id="form-rhf-demo-title"
                                aria-invalid={!!errors.firstName}
                                placeholder="Enter First Name"
                                autoComplete="off"
                                maxLength={30}

                            />

                            {errors.firstName && (
                                <FieldError errors={[errors.firstName]} />
                            )}
                        </Field>
                        <Field data-invalid={!!errors.lastName}>
                            <FieldLabel htmlFor="form-rhf-demo-title">
                                Last Name
                            </FieldLabel>
                            <Input
                               {...register("lastName")}
                                id="form-rhf-demo-title"
                                aria-invalid={!!errors.lastName}
                                placeholder="Enter Last Name"
                                autoComplete="off"
                                maxLength={30}
                            />

                            {errors.lastName && (
                                <FieldError errors={[errors.lastName]} />
                            )}
                        </Field>
                        <Field data-invalid={!!errors.email}>
                            <FieldLabel htmlFor="form-rhf-demo-title">
                                Email
                            </FieldLabel>
                            <Input
                               {...register("email")}
                                id="form-rhf-demo-title"
                                aria-invalid={!!errors.email}
                                placeholder="Enter Email"
                                autoComplete="off"
                            />

                            {errors.email && (
                                <FieldError errors={[errors.email]} />
                            )}
                        </Field>
                        <Field data-invalid={!!errors.mobile}>
                            <FieldLabel htmlFor="form-rhf-demo-title">
                                Mobile
                            </FieldLabel>
                            <Input
                               {...register("mobile")}
                                id="form-rhf-demo-title"
                                aria-invalid={!!errors.mobile}
                                placeholder="Enter Mobile Number"
                                autoComplete="off"
                                maxLength={10}
                            />

                            {errors.mobile && (
                                <FieldError errors={[errors.mobile]} />
                            )}
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field>
                    <Button variant="default" type="submit" form="hd-signup-form">
                        Submit
                    </Button>
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}

export default SignUpForm;