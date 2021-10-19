import React from 'react';

// Footer css import

import './Footer.css';

const Footer = () => {
    return (

        // Footer

        <div className="footer">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4 className="text-">SMSM Hospital</h4>
                        <p><small>smsm hospital is one of the private hospitals in the prime location of Dhaka, providing health care with the latest medical, surgical, and diagnostic facilities.</small></p>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Contact Us:</h4>
                        <p><small>CONTACT US
                        304/E Shaheed Tazuddin Avenue, Tejgaon (Behind Channel-i office), Dhaka, Bangladesh.
                        smsmsmdhaka@gmail.com
                        </small></p>
                        <button type="button" className="btn nohover btn-secondary btn-block mt-3" >
                            <a href="#"><i className="fa fa-phone"></i></a>
                        16352
                        </button>
                    </div>
                    {/* Column3 */}
                    
                    <div className="col">
                    <div>
                        <input className="form-control" type="email" placeholder="Email"/>
                    </div>
                    <input className="btn btn-primary mt-3" type="Submit"/>
                       {/* <button className="btn btn-primary mt-3 customhover" type="submit" 
                       
                       ></button> */}
                    </div>
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear} This MEMEs INC | All right reserved | Terms of Service| Privacy.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;



// // <ul className="list-unstyled">
// <li>Online Class Video</li>
// <li>Experience Teacher</li>
// <li>Responsiblity</li>

// </ul>

{/* <ul className="list-unstyled">
    <li>Phone:01786588096</li>
    <li>Email:shahinmahmud412@gmail.com</li>
    <li>Address:Uttara,sector-4,Dhaka Bangladesh</li>

    </ul> */}


    // <h4>Help Line:</h4>
    //                     <ul className="list-unstyled">
    //                         <li>16216</li>
    //                         <li>Any Require</li>
    //                         <li>Call Us</li>

    //                     {/* </ul> */}
