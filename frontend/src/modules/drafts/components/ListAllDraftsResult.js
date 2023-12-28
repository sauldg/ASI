import {FormattedMessage} from 'react-intl';
import {useSelector} from 'react-redux';
import {useEffect} from "react";
import * as selectors from '../selectors';
import Drafts from './Drafts';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import * as actions from '../../parts/actions';

const ListAllDraftsResult = () => {
    const dispatch = useDispatch();
    const draft = useSelector(selectors.getDrafts);
    const navigate = useNavigate();

    useEffect(() => {return () => dispatch(actions.clearPart())}, []);

    if (!draft) {
        return (<h4>{"No funciona"}</h4>);
    }

   if (draft.length === 0) {
        return (
            <div className="alert alert-danger" role="alert">
                <FormattedMessage id='project.drafts.ListDrafts.noDraftsFound'/>
            </div>
        );
    }

    return (

        <div>
            <h4><FormattedMessage id="project.app.Header.drafts"/></h4>
            <Drafts drafts={draft}/>
            <br />
            <br />
            <button className='roundedButtonCentered' onClick={() => {navigate("/drafts/form")}}><FormattedMessage id="project.parts.createDraft"/></button>
        </div>

    );

}

export default ListAllDraftsResult;