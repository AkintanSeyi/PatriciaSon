import React , {useEffect , useState} from 'react';
import * as Style from "./style";
import { useNavigate   } from 'react-router-dom';
import {  useDispatch ,  useSelector } from 'react-redux';
import { GetExerciseDetails, GetIndividualExerciseDetail } from '../../action/exercise';

const Exercises = () => {


   const dispatch = useDispatch();
   const navigate = useNavigate();
  useEffect(() => {
    dispatch(GetExerciseDetails());
  }, [])






 const  {exercisedatas } = useSelector((state) => state?.exercisedata );
 //console.log(unidatas[0].nameOfschools);
 if (!exercisedatas) return null;



  return (

      <Style.Exercise  id='Exercise'>
           <Style.Exercise_Header>
            List Of Exercises
           </Style.Exercise_Header>

           <Style.Exercise_Container>

{
  exercisedatas.map((item , index) => {
  return <Style.Exercise_Box  key={index} onClick = {() => dispatch(GetIndividualExerciseDetail(item._id , navigate))} >
    <Style.Exercise_Img src={item.image} />
    <Style.Exercise_NameSections>
  <Style.Exercise_Paragraph>
    #{item.name}
  </Style.Exercise_Paragraph>
  <Style.Exercise_Paragraph>
    {item.name}
  </Style.Exercise_Paragraph>

    </Style.Exercise_NameSections>
    <Style.Exercise_CharacterHolder>
    <Style.Exercise_Paragraph>
     Characteristics : {item.characteristics}
  </Style.Exercise_Paragraph>
    </Style.Exercise_CharacterHolder>


  </Style.Exercise_Box>




  })









}



           </Style.Exercise_Container>



      </Style.Exercise>


  )
}

export default Exercises