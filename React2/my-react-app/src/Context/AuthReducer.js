const  AuthReducer = (state,action)=>{

     switch(action.type){
        case "Login_Start":
            return{
                user:null,
                Isfetching: true,
                error:false,
                address:"http://44.202.35.128:"
            }

        case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                Isfetching: false,
                error: false,
                address:"http://44.202.35.128:"

            }

            case "LOGIN_Fail":
                
            return {

                user:null,
                Isfetching : false,
                error :  "Failed",
            address:"http://44.202.35.128:"
            }
     }
}

export default AuthReducer