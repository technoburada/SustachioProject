import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./homepage/componentshomepage/Navbar";
import Chatbot from "./chatbot/Chatbot";
import Home from "./homepage/Homepage";
import Footer from "./homepage/componentshomepage/Footer";
import Cookieconsent from "./cookiespage/Cookieconsent";

/* About Company Section */
import AboutCompany from "./AboutCompany/AboutCompany";

/* Pricing Section */
import Pricing from "./pricing/Pricingmain";

/* Sustainability Section */
import Sustainability from "./sustainabilitypage/Sustainabilitymain"; 

/* Products Section */
import Foodbeverage from "./productpage/FoodBeweragepage";
import Tablewareplate from "./productpage/FoodBeweragepagecomponents/Productdetailsmain";

/* Contact Section */
import Contact from "./contactpage/Contact"; 

/* Signin & Signup Section */
import Signin from "./sign/signin/signinmain";
import ForgotPassword from "./sign/signin/ForgotPassword.js";
import Signup from "./sign/signup/Signupmain";
import TermsPolicy from "./sign/signup/termsandpolicy";
import Myprofile from "./sign/profilesetting/Customerprofile";
import FQA from "./frequentlyaskedquestions/askedquestionsmain/AskedQuestionsmain";

/* Customer Setting Pages */
import Personalinfo from "./sign/profilesetting/Customersettingpages/Personalinfo";

/* News Section */
import News from "./Newspage/Newspagemain";
import Newsdetail1 from "./Newspage/newsdetails/Newsdetail1";

/* Career Section */
import Careers from "./careerpage/Careerpage"; 
import Productlist from "./productpage/FoodBeweragepagecomponents/Productlist";
import Jobapply from "./careerpage/Applyjob1/Applyjob1";
import Jobapplicationform from "./careerpage/jobapplicationsform/jobapplicationform";

/* Index css */
import "./index.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  
  // Define pages where Navbar and Footer should be hidden
  const pagesWithoutNavbarFooter = ["/Signin", "/Signup", "/jobapplicationform", "/TermsPolicy", "/ForgotPassword"];
  const hideNavbarFooter = pagesWithoutNavbarFooter.includes(location.pathname);

  return (
    <div className="App">
      {/* Cookie Consent Component */}
      <Cookieconsent />

      {/* Navbar (Hidden on specified pages) */}
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        {/* Main homepage */}
        <Route path="/" element={<Home />} /> 
        <Route path="/Home" element={<Home />} />

        {/* About Company page */}
        <Route path="/AboutCompany" element={<AboutCompany />} />

        {/* Sustainability page */}
        <Route path="/sustainability" element={<Sustainability />} />

        {/* Products pages */}
        <Route path="/Foodbeverage" element={<Foodbeverage />} />
        <Route path="/Productlist" element={<Productlist />} />
        <Route path="/tablewareplate/:id1" element={<Tablewareplate />} />

        {/* Pricing page */}
        <Route path="/pricing" element={<Pricing />} />

        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* Careers pages */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/Jobapply/:jobId" element={<Jobapply />} />
        <Route path="/jobapplicationform" element={<Jobapplicationform />} />

        {/* Signin & Signup pages */}
        <Route path="/Signin" element={<Signin />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Myprofile" element={<Myprofile />} />

        {/* Customer Profile Settings */}
        <Route path="/Personalinfo" element={<Personalinfo />} />
        
        {/* Frequently Asked Questions page */}
        <Route path="/FQA" element={<FQA />} />

        {/* News pages */}
        <Route path="/News" element={<News />} />
        <Route path="/Newsdetail1" element={<Newsdetail1 />} />

        {/* Terms and Policy page */}
        <Route path="/TermsPolicy" element={<TermsPolicy />} />
      </Routes>

      {/* Chatbot Component */}
      <Chatbot />

      {/* Footer (Hidden on specified pages) */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;