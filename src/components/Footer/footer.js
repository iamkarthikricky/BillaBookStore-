import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

import './footer.css'
import { FooterMainContainer, FooterSubHeading } from "./footerStyling";
import { useSelector } from "react-redux";

const Footer=()=>{

  const isDark = useSelector((state)=>state.billaBookStore.isDark)

                return(
                    <FooterMainContainer $isDark={isDark}>
                    <div className='container'>
            <div className='row'>
                    <div className='col-12'>
                    <hr style={{color:isDark ?'#f9f9f9':'' }}></hr>
                  <div className="payments-container">
                    <div className='play-store-container'>
                        <FooterSubHeading className='footer-sub-heading' $isDark={isDark}>Our Payment Partners</FooterSubHeading>
                        <ul className='payment-partners-ul-list'>
                            <li>
                                <img width="35" height="35" src="https://img.icons8.com/color/96/bhim.png" alt="bhim"/>
                            </li>
                            <li>
                                <img width="35" height="35" src="https://img.icons8.com/color/96/google-pay.png" alt="google-pay"/>
                            </li>
                            <li>
                                <img width="35" height="35" src="https://img.icons8.com/color/96/phone-pe.png" alt="phone-pe"/>
                            </li>
                            <li>
                                <img width="35" height="35" src="https://img.icons8.com/color/96/paytm.png" alt="paytm"/>
                            </li>
                        </ul>
                        </div>
                        <div className='play-store-container'>
                        <FooterSubHeading className='footer-sub-heading' $isDark={isDark}>Order Now On    </FooterSubHeading>
                        <ul className='payment-partners-ul-list'>
                            <li><img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534522/ShoppingClone/appstore-btn_edbcsz.svg" alt="app-store" className="store-img"/></li>
                            <li><img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534522/ShoppingClone/googleplay-btn_g9i3xp.svg" alt="play-store" className="store-img"/></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    </div>
                    <hr style={{color:isDark ?'#f9f9f9':'' }}></hr>

            </div>
            <div className='container'>
              <div className='row copy-right-container'>
                <div className='col-12 col-md-6'>
                  <p className=''>&copy; 2024 Billa Bookstore. All rights reserved. Developed by Karthik Maheshwarapu.</p>
                </div>
                <div className='col-12 col-md-6'>
                  <ul className='social-icons-container'>
                    <li>Follow us on</li>
                    <li className='social-icon'><a href="www.google.com" className='nav-link'><FaFacebook fontSize={"20px"}/></a></li>
                    <li className='social-icon'><a href="www.google.com" className='nav-link'><FaTwitter fontSize={"20px"}/></a></li>
                    <li className='social-icon'><a href="www.google.com"  className='nav-link'><FaInstagram fontSize={"20px"}/></a></li>
                  </ul>
                </div>
              </div>
            </div>
                    </FooterMainContainer>
                )
}


export default Footer