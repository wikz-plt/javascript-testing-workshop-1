import React from 'react';
import Header from './Header';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'dark'
        }
    }

    render() {
        return (
            <div className="layout-wrapper">
                <Header theme={this.state.theme} />
                {this.props.children}
            </div>
        )
    }
}

export default Layout;