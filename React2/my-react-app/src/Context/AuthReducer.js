const  AuthReducer = (state,action)=>{

     switch(action.type){
        case "Login_Start":
            return{
                user:null,
                Isfetching: true,
                error:false,
                address:"http://44.201.119.225:"
            }

        case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                Isfetching: false,
                error: false,
                address:"http://44.201.119.225:"

            }

            case "LOGIN_Fail":
                
            return {

                user:null,
                Isfetching : false,
                error :  "Failed",
            address:"http://44.201.119.225:"
            }
     }
}

export default AuthReducer