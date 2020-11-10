import React, {Component} from 'react';
import './Hobby.scss'
import HobbyCard from "./hobbyCard/hobbyCard";
import {hobbyVadim, hobbyVlad} from "../../MOCK_DATA";

class Hobby extends Component {
    render() {
        return (
            <section className={'hobby-section'} id={'hobby'}>
                <span className={'header'}>Хоббі</span>
                <div className={'card-wrapper'}>
                    <HobbyCard title={'Влад Середенко'} data={hobbyVlad}/>
                    <HobbyCard title={'Вадим Сайко'} data={hobbyVadim}/>
                </div>
            </section>
        );
    }
}

export default Hobby;