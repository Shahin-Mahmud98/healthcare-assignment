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
















