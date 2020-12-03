import React, {Component} from 'react';
import './aboutUs.scss'
import AboutUsCard from "./parts/ aboutUsCard/aboutUsCard";
import vados from '../../assets/vados.jpg'
import vadim from '../../assets/vadim.jpg'

class AboutUs extends Component {
    render() {
        return (
            <section className={'about-us-section'} id={'aboutUs'}>
                <div className={'card-wrapper'}>
                    <AboutUsCard title={'Влад Середенко'} description={'Прихильник Лєпса'} photo={vados}/>
                    <AboutUsCard title={'Вадім Сайко'} description={'Вар 19 левела'} photo={vadim}/>
                </div>
            </section>
        );
    }
}

export default AboutUs;