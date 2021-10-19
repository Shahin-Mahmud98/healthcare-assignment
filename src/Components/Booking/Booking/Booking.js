import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';


const Booking = () => {
    const { serviceId } = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setDetail(data.find(x=> parseInt(x.id) === +serviceId)));
    }, [])
    console.log(detail);
    return (
        <Container>
            <h1>This is your id no : {serviceId}</h1>
            <div className="row">
                <div className="col-md-4">
                    <img src={detail.img} alt="" className="w-100" />
                </div>
                <div className="col-md-8">
                    <h3>{detail.name}</h3>
                    <p>{detail.description}</p>

                </div>
            </div>
        </Container>
    );
};

export default Booking;
















// import React, { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { useParams } from 'react-router';

// const Details = () => {
//     const [docDetails,setDocDetails] = useState([])
//     const {Id} = useParams()
//     useEffect(()=>{
//         fetch('/doctors.json')
//         .then(res => res.json())
//         .then(data => setDocDetails(data.find(x=> x.Id === +Id)))
//     },[])
//     return (
//         <Container>
//             <h1>This is your id no : {Id}</h1>
//             <div className="row">
//                 <div className="col-md-4">
//                     <img src={docDetails.img} alt="" className="w-100" />
//                 </div>
//                 <div className="col-md-8">
//                     <h3>{docDetails.name}</h3>
//                     <p>Call {docDetails.call}</p>
//                     <p>Call {docDetails.time}</p>
//                 </div>
//             </div>
//         </Container>
//     );
// };

// export default Details;