import React from 'react';
import { Container } from 'react-bootstrap';
import doctor1 from '../../../images/doctor-1.jpg';
import doctor2 from '../../../images/doctor-2.jpg';
import doctor3 from '../../../images/doctor-3.jpg';
import doctor4 from '../../../images/doctor-4.jpg';
import doctor5 from '../../../images/doctor-5.jpg';
import Doctor from './Doctor/Doctor';



const specialDoctors=[
      {
             img: doctor1,
            name: 'Andrew Smith',
            expertizement: 'ENT'
        },
        {
             img: doctor2,
         name: 'Mk Kalam',
         expertizement: 'Herat Surgery'
         },
        {
             img: doctor3,
             name: 'Andrew',
             expertizement: 'AurthoPedic'
        },
        {
        img: doctor4,
            name: ' jhon mc',
            expertizement: 'surgery'
         },
         {
          img: doctor5,
            name: 'Smith jhon',
            expertizement: 'medichine'
         }
     ]
    

const Doctors = () => {
    return (
        <div className="container">
          <h2 className="text-primary">Our special Doctor</h2>
           <div className="row">
                {
                     specialDoctors.map(doctor => <Doctor key={doctor.name} doctor={doctor}></Doctor>)
               }
           </div>
       </div>
   );
 };

export default Doctors;


