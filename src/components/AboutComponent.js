import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';

function RenderEmployee({employee}) {

    const imgStyle = {
        maxHeight: 128,
        maxWidth: 128
      }

    return (
        <div className="col-12 col-mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={baseUrl + employee.image} style={imgStyle} alt={employee.name}></Media>
                </Media>
                <Media body className='ml-5'>
                <Media heading>{employee.name}</Media>
                <p><strong>{employee.designation}</strong></p> 
                <p>{employee.description}</p>
                </Media>
            </Media>
        </div>
    );
}

function About(props) {

    const employees = props.employees.employees.map((employee) => {
        return (
            <Fade in>
                <RenderEmployee key={employee.id} employee={employee} />
            </Fade>
        );
    }); 

    return(
        <div className="container">

            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h2>The Double J Crew</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        <Stagger in>
                            {employees}
                        </Stagger>
                    </Media>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>The Double J Saloon opened in 2016 and quickly became THE social and musical gathering place for Lake City!  Come on out and join in the fun.  Our open mic happens on the first and third Tuesdays with an 8:30pm start time. Live music by great local bands Wednesdays and weekends.  And a full cocktail bar and food menu that goes well beyond the standard pub fare, with top-notch BBQ offerings.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">December 2016</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Double J Saloon</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1 Bazillion</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">4</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default About;