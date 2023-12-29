import {useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

import AppGlobalComponents from './AppGlobalComponents';
import Home from './Home';
import {Login, SignUp, UpdateProfile, ChangePassword, Logout} from '../../users';
import users from '../../users';
import {ListAllDrafts, ListAllDraftsResult} from '../../drafts';
import {PartDetails, ListAllParts, ListAllPartsResult} from '../../parts';
import {DraftDetails} from '../../drafts';
import DraftForm from '../../drafts/components/DraftForm';
import * as selectors from '../selectors';

const Body = () => {

    const profile = useSelector(selectors.getProfile);
    
   return (

        <div className="container">
            <br/>
            <AppGlobalComponents/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/drafts/all" element={<ListAllDrafts/>}/>
                <Route path="/drafts/:id" element={<DraftDetails/>}/>
                <Route path="/drafts/form" element={<DraftForm/>}/>
                <Route path="/parts/all" element={<ListAllParts/>}/>
                <Route path="/parts/:id" element={<PartDetails/>}/>
            </Routes>
        </div>

    );

};

export default Body;
