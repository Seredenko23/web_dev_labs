import React, {Component} from 'react';
import './profession-card.scss'
import ProfessionRadar from "./radar/radar"

class ProfessionCard extends Component {
    render() {
        return (
            <div className={'profession-card'}>
                <span className={'profession-title'}>{this.props.title}</span>
                <span className={'profession-title'}>{this.props.description}</span>
                <ProfessionRadar data={this.props.data}/>
            </div>
        );
    }
}

export default ProfessionCard;