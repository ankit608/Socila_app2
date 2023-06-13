const  AuthReducer = (state,action)=>{

     switch(action.type){
        case "Login_Start":
            return{
                user:null,
                Isfetching: true,
                error:false
            }

        case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                Isfetching: false,
                error: false

            }

            case "LOGIN_Fail":
                
            return {

                user:null,
                Isfetching : false,
                error :  "Failed",
            }
     }
}

export default AuthReducer