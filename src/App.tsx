import React from 'react';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';
import Footer from "./Footer";

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src={'https://png.pngtree.com/png-clipart/20190604/original/pngtree-business-logo-design-png-image_915991.jpg'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
            </nav>
            <div className={'content'}>
                Main Content
            </div>
        </div>
    );
}

export default App;
