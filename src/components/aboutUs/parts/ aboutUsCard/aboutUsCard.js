import React, {Component} from 'react';
import './aboutUsCard.scss'

class AboutUsCard extends Component {
    render() {
        return (
            <div className={'card'}>
                <img alt={'photo'} className={'card-photo'} src={this.props.photo}/>
                <span className={'card-title'}>{this.props.title}</span>
                <span className={'card-description'}>{this.props.description}</span>
            </div>
        );
    }
}

export default AboutUsCard;