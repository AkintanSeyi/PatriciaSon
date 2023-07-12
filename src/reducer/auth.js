


const authReducers = (state = {authData : null , isLoading : false} , action ) => {


    switch (action.type) {
        case "Auth":
           localStorage.setItem("profile" , JSON.stringify({...action?.data}))

       return {...state , authData: action?.data};

       case "LogOut" :

       localStorage.clear();

         return {...state , authData : null}



        default:
            return state ;
    }


}



export default authReducers;