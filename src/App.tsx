import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src={'https://png.pngtree.com/png-clipart/20190604/original/pngtree-business-logo-design-png-image_915991.jpg'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages </a>
                </div>
                <div>
                    <a>News </a>
                </div>
                <div>
                    <a>Music </a>
                </div>
                <div>
                    <a>Settings </a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img
                        src={'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg'}/>

                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New Post
                    </div>
                    <div>
                        pos 1
                    </div>
                    <div>
                        pos 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
