import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
const {Link} = require('react-router');
class MenuExampleContentProp extends Component {
    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    render() {
        const {activeItem} = this.state

        return (
          <div>
            <Menu className='ui top fixed menu'>
                <Link to="/home">
                    <Menu.Item name='Home' active={activeItem === 'Home'} content='Home' onClick={this.handleItemClick}/></Link>
                <Link to="/favourites">
                    <Menu.Item name='Favourites' active={activeItem === 'Favourites'} content='Favourites' onClick={this.handleItemClick}/>
                </Link>
                <Menu.Item name='logout' active={activeItem === 'logout'} position='right' onClick={this.logoutCall}/>
            </Menu>
            <Menu className='ui bottom fixed menu'>
                  <p>Footer</p>
            </Menu>
          </div>
        )
    }
}

module.exports = MenuExampleContentProp;
