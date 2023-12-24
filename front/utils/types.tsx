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

export interface RequestResponseType {
    status:string,
    message:string
}

export type useRequestType = (body:LoginBody | RegisterBody) => RequestResponseType;