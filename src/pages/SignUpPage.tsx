import SignInForm from "@/components/forms/SignInForm"

const SignUpPage = ()=>{
    return(
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-center bg-[url(https://plus.unsplash.com/premium_vector-1729139375723-58e85b697b26?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center"
            >
                <h1 className="text-5xl font-bold bg-cyan-900 text-white">
                    HelpDesk
                </h1>
            </div>
            <div className="flex items-center justify-center bg-teal-100 p-2">
                <SignInForm/>
            </div>
        </div>
    )
}

export default SignUpPage