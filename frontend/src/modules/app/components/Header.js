import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import * as actions from '../actions';
import { useEffect } from 'react';
import * as selectors from '../selectors';

const Header = () => {

    const dispatch = useDispatch();
    const profile = useSelector(selectors.getProfile);

    useEffect(() =>{
        console.log('test ' + profile);
    }, [profile]);

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light border">
            <Link className="navbar-brand" to="/">ASI Project</Link>
            <button className="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/drafts/all">
                            <FormattedMessage id="project.app.Header.drafts"/>
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/parts/all">
                            <FormattedMessage id="project.app.Header.parts"/>
                        </Link>
                    </li>
                </ul>

                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <select className="rounded" id="profile" onChange={(e) => {dispatch(actions.updateProfile(e.target.value))}}>
                            <option value={"admin"} defaultChecked={true}><FormattedMessage id="project.app.Header.profile.admin"/></option>
                            <option value={"workshop"} defaultChecked={true}><FormattedMessage id="project.app.Header.profile.workshop"/></option>
                        </select>
                    </li>
                </ul>
                
                {/*userName ? 

                <ul className="navbar-nav">
                
                    <li className="nav-item dropdown">

                        <a className="dropdown-toggle nav-link" href="/"
                            data-toggle="dropdown">
                            <span className="fa-solid fa-user"></span>&nbsp;
                            {userName}
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="/users/update-profile">
                                <FormattedMessage id="project.users.UpdateProfile.title"/>
                            </Link>
                            <Link className="dropdown-item" to="/users/change-password">
                                <FormattedMessage id="project.users.ChangePassword.title"/>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/users/logout">
                                <FormattedMessage id="project.app.Header.logout"/>
                            </Link>
                        </div>

                    </li>

                </ul>
                
                :

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/users/login">
                            <FormattedMessage id="project.users.Login.title"/>
                        </Link>
                    </li>
                </ul>
                
                */}

            </div>
        </nav>

    );

};

export default Header;
