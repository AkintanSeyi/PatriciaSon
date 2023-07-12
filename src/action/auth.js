

import * as api from "../api/index.js"

export const signIn = (formData , navigate) => async (dispatch) => {

    try {

        const {data} = await api.signIn(formData);

        console.log(data);

        dispatch({type : "Auth"  , data});



        navigate("/Home")



    } catch (error) {
        console.log(error);

    }





}

export const signUp = (formData , navigate) => async (dispatch) => {



    try {

        const {data} = await api.signUp(formData);
        console.log(data);

        dispatch({type: 'Auth' , data})



        navigate("/Home");

    } catch (error) {
        console.log(error);

    }


}

export const LogOutUser = (navigate) => async (dispatch) => {

    dispatch({type : "LogOut"});
    navigate("/");


};