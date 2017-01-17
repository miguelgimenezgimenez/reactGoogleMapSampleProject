import React, {Component} from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';

import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

import '../Styles/Appbar.css';

class Navigation extends Component {
    componentDidMount() {
    }

    render() {

        return (
            <div>
                <div className='upper-nav'>
                    <Link to="/session/createactivity">
                        <button>
                          Create Activity
                        </button>
                    </Link>

                    <div className='user'>
                        <button>Settings</button>
                        <img className="avatar" width={40} height={40} src="../../images/avatar.png" alt="Image"/>
                    </div>

                </div>
                <div className='lower-nav'>
                    <Link to="/session/all">
                        <div className='lower-nav-item selected'>
                            All Activities
                        </div>
                    </Link>
                    <Link to="/session/rewarded">
                        <div className='lower-nav-item'>Rewarded Tasks</div>
                    </Link>
                    <Link to="/session/leisure">
                        <div className='lower-nav-item'>Leisure Activities</div>
                    </Link >
                    <Link to="/session/cultural">
                        <div className='lower-nav-item'>Cultural Activities</div>
                    </Link>
                    <Link to="/session/sports">
                        <div className='lower-nav-item'>Sport/Adventure Activities
                        </div>
                    </Link>

                </div>
            </div>
        );
    }
}
export default Navigation;
