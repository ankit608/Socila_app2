export const LoginStart = (usercredentials)=>({
type: "Login_Start"
})

export const Login_Success =( user)=>(
    {
        type:"LOGIN_SUCCESS",
        paylod: user,
     }
)
export const Login_Fail =( user)=>({
    type:"LOGIN_Fail",
    payload: user,

})