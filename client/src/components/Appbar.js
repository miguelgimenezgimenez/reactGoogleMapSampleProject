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
                    <Link to="createactivity">
                        <button>
                          Create Activity
                        </button>
                    </Link>

                    <div className='user'>
                        <button>Settings</button>
                        <img className="avatar" width={40} height={40} src="http://www.mujerhoy.com/noticias/201612/21/media/cortadas/Dalianah-Arekion-kCKI-U21839055910jrB-476x714@MujerHoy.jpg" alt="Image"/>
                    </div>

                </div>
                <div className='lower-nav'>
                    <Link to="all">
                        <div className='lower-nav-item selected'>
                            All Activities
                        </div>
                    </Link>
                    <Link>
                        <div className='lower-nav-item'>Rewarded Duties</div>
                    </Link>
                    <Link>
                        <div className='lower-nav-item'>Leisure Activities</div>
                    </Link>
                    <Link>
                        <div className='lower-nav-item'>Cultural Activities</div>
                    </Link>
                    <Link>
                        <div className='lower-nav-item'>Sport/Adventure Activities
                        </div>
                    </Link>

                </div>
            </div>
        );
    }
}
export default Navigation;
