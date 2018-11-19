import React, { Component } from 'react';

import GameMenu from './GameMenu';

class App extends Component {
    render() {
        return (
            <div id="outer" className="h-100 d-flex justify-content-center align-items-center">
                <div className="card animated bounceInDown tf2-main mx-4">
                    <div className="card-body">
                        <GameMenu />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;