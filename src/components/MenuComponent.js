import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ thing, onClick }) {
    return(
        <Card>
            <Link to={`/menu/${thing.id}`} >
                <CardImg width="100%" src={baseUrl + thing.image} alt={thing.name} />
                <CardImgOverlay>
                    <CardTitle>{thing.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.things.things.map((thing) => {
        return (
            <div key={thing.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem thing={thing} />
            </div>
        );
    });

    if (props.things.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.things.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.things.errMess}</h4>
                </div>
            </div>
        );
    }
    else 
        return ( 
            <div className="container">
                <div className ="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
    );
}
export default Menu;