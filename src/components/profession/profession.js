import React, {Component} from 'react';
import './profession.scss'
import ProfessionCard from "./profession-card/profession-card";
import {dataVadim, dataVlad} from "../../MOCK_DATA";

class Profession extends Component {
    render() {
        return (
            <section className={"profession-section"} id={'profession'}>
                <span className={'header'}>Профессія</span>
                <div className={'card-wrapper'}>
                    <ProfessionCard title={'Влад Середенко'} description={'Веб-розробник'} data={dataVlad}/>
                    <ProfessionCard title={'Вадим Сайко'} description={'Веб-розробник'} data={dataVadim}/>
                </div>
            </section>
        );
    }
}

export default Profession;