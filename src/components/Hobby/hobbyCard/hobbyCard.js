import React, {Component} from 'react';
import './hobbyCard.scss'

class HobbyCard extends Component {
    render() {
        return (
            <div className={'hobby-card'}>
                <span className={'hobby-title'}>{this.props.title}</span>
                {this.props.data.map((hobby) => {
                    return (<div className={`hobby-ball s${hobby.size}`}
                                 style={{
                                     backgroundColor: hobby.color,
                                     top: hobby.top,
                                     left: hobby.left
                                 }}
                    >
                        {hobby.title}
                    </div>)
                })}
            </div>
        );
    }
}

export default HobbyCard;