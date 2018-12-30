import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    name:'Brisket',
                    image: 'assets/images/brisket.png',
                    category: 'mains',
                    label:'Hot',
                    price:'15',
                    description:'The best night of the week is Brisket night @ the Double J! Only $15 with all the sides... 5:30pm til we run out! Plus happy hour until 8pm!'
                },
                {
                    id: 1,
                    name:'Baby Back Ribs',
                    image: 'assets/images/babyback.png',
                    category: 'appetizer',
                    label:'',
                    price:'10',
                    description:'In honor of Whiskey Wednesday, the Double J Saloon has hickory smoked baby back ribs with bourbon BBQ sauce... Available now til they are gone!  Perfect with an ice cold beer and a shot! Better hurry!'
                },
                {
                    id: 2,
                    name:'Peanuts',
                    image: 'assets/images/peanuts.png',
                    category: 'appetizer',
                    label:'New',
                    price:'0.00',
                    description:'Bottomless amounts of fresh, salty peanuts!'
                },
                {
                    id: 3,
                    name:'Moscow Mules, Mai Tais, and Margaritas',
                    image: 'assets/images/margarita.png',
                    category: 'dessert',
                    label:'',
                    price:'6',
                    description:'M is for Monday means that YOU WIN!  Come join us every Monday for $6 Moscow Mules, $6 Mai Tais, and $6 Margaritas! Start the week off right!'
                }
            ],
        };
    }

    render() {

        const menu = this.state.items.map((item) => {
            return (
                <div key = {item.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={item.image} alt={item.name} />
                        </Media>
                        <Media body classname="ml-5">
                            <Media heading>{item.name}</Media>
                            <p>{item.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return ( 
            <div classname="container">
                <div classname="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;