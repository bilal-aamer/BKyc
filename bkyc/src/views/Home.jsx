import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/home.css';
import Fade from 'react-reveal/Fade';
import blockchain from '../assets/blockchain.svg';
import secure from '../assets/secure.svg';
import RContent from "../components/content/RContent";
import LContent from "../components/content/LContent";
import ContactForm from "../components/forms/Contact";
import Footer from "../components/Footer";
import Nav from "./Nav";
import {  toast } from 'react-toastify';

const Home = () => {
   
  const { isAuthenticated, user } = useAuth0();

   React.useEffect(() => {
    isAuthenticated ? toast.success(`Logged in using ${user.email} !`, {
      position: toast.POSITION.TOP_CENTER,
      style: { lineHeight: 1.5}
    }) : toast.success("Logged out Successfully !", {
      position: toast.POSITION.TOP_CENTER
    })
   }, [])

    console.log(useAuth0());

    return(
       <div className="body">
         <div className="sec1">
            <div className="front">
                <Nav />
                <div className="mainHeading">
                    <p className="title">
                      <Fade left cascade> B'KYC'</Fade>
                    </p>
                    <p className="tagline"> KYC of users using <big className="tech">blockchain</big> technology </p>
                </div>
            </div>
            <div className="back" />
         </div>
         <RContent src={blockchain} alt="blockchain technology" />
         <LContent src={secure} alt="Secure application" />
         <div className="contact-form">
             <ContactForm />
         </div>
         <Footer />
       </div>
    )
};

export default Home;