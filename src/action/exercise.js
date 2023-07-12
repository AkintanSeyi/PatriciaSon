



import * as api from "../api/index.js"

export const GetExerciseDetails = () => async (dispatch) => {

    try {

        const {data} = await api.exerciseDetail();
        dispatch({type : "EXERCISEDETAILS"  , data})
        console.log(data);




    } catch (error) {
        console.log(error);

    }


}


export const GetIndividualExerciseDetail = (id , navigate) => async (dispatch) => {

console.log(id);
try {
    const {data} = await api.exerciseIndividualDetail(id);
    dispatch({type : "INDIVIDUALDETAILS"  , data});
    navigate(`/exercisepage/${id}`);

    console.log(data);

} catch (error) {
    console.log(error);
}






}