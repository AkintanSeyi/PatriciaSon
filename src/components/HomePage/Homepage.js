import React , {useEffect , useState} from 'react';
import * as Style from "./style";
import { Link, useNavigate   } from 'react-router-dom';
import {  useDispatch ,  useSelector } from 'react-redux';
//import {RiArrowRightDoubleFill} from "react-icons/ri";
import {TiArrowRightThick} from "react-icons/ti";
import {MdOutlineWavingHand} from "react-icons/md"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <Style.HomePage   >

<Style.HomePage_Container  className='Home_backgroundImage' >


<Style.HomePage_ImageContainer data-aos="fade-left"  data-aos-duration="1000"  >
    <Style.HomePage_img     src={require('../../images/323975454_2191134737736628_5751669062532143065_n.jpg')}    alt = "Img"   />
</Style.HomePage_ImageContainer>
<Style.HomePage_Paragraph data-aos="fade-left" > Welcome to my website  </Style.HomePage_Paragraph>
<Link  to = "/profile"  style={{textDecoration : "none" , cursor : "pointer"}} >
  <Style.HomePage_Button  data-aos="fade-right" >
Learn About Me     <TiArrowRightThick   className='arrow1'  />
  </Style.HomePage_Button>
  </Link>
</Style.HomePage_Container>

    </Style.HomePage>
  )
}

export default Homepage;