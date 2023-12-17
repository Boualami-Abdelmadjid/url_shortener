export interface LoginBody {
    email:string,
    password:string,
    remember:Boolean
}

export interface RegisterBody {
    email:string,
    password:string,
    password2:string
}