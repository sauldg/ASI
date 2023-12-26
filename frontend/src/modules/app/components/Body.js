import {useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

import AppGlobalComponents from './AppGlobalComponents';
import Home from './Home';
import {Login, SignUp, UpdateProfile, ChangePassword, Logout} from '../../users';
import users from '../../users';
import {ListAllDrafts, ListAllDraftsResult} from '../../drafts';
import {PartDetails} from '../../parts';
import {DraftDetails} from '../../drafts';

const Body = () => {

    const loggedIn = useSelector(users.selectors.isLoggedIn);
    
   return (

        <div className="container">
            <br/>
            <AppGlobalComponents/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/drafts/all" element={<ListAllDrafts/>}/>
                <Route path="/drafts/all/all-results" element={<ListAllDraftsResult/>}/>
                <Route path="/drafts/:id" element={<DraftDetails/>}/>
                <Route path="/parts/:id" element={<PartDetails/>}/>
                {loggedIn && <Route path="/users/update-profile" element={<UpdateProfile/>}/>}
                {loggedIn && <Route path="/users/change-password" element={<ChangePassword/>}/>}
                {loggedIn && <Route path="/users/logout" element={<Logout/>}/>}
                {!loggedIn && <Route path="/users/login" element={<Login/>}/>}
                {!loggedIn && <Route path="/users/signup" element={<SignUp/>}/>}
            </Routes>
        </div>

    );

};

export default Body;
