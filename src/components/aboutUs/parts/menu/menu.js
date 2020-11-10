import React, {Component} from 'react';
import './menu.scss'

class Menu extends Component {
    render() {
        return (
            <nav className={'nav-menu'}>
                <div className={'title-wrapper'}>
                    <span className={'title'}>
                        Cайт Братанов
                    </span>
                </div>
                <div className={'links-wrapper'}>
                    <a className={'link'} href={'#aboutUs'}>
                        Про себе
                    </a>
                    <a className={'link'} href={'#profession'}>
                        Професія
                    </a>
                    <a className={'link'} href={'#hobby'}>
                        Хоббі
                    </a>
                </div>
            </nav>
        );
    }
}

export default Menu;