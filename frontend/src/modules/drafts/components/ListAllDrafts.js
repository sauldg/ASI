import {FormattedMessage} from 'react-intl';
import {useSelector} from 'react-redux';
import {useEffect, useState} from "react";
import * as selectors from '../selectors';
import Drafts from './Drafts';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import * as actions from '../../parts/actions';
import * as draftActions from '../actions';

const ListAllDraftsResult = () => {
    const dispatch = useDispatch();
    const draft = useSelector(selectors.getDrafts);
    const [drafts, setDrafts] = useState(draft);
    const navigate = useNavigate();

    useEffect(() => {
        if(draft.length == 0) {
            dispatch(draftActions.listAllDrafts((drafts) => {setDrafts(drafts)}));
        }
        
        return () => dispatch(actions.clearPart())
    }, [draft]);

    if (!drafts) {
        return (<h4>{"No funciona"}</h4>);
    }

    if (drafts.length === 0) {
        return (
            <div className="alert alert-danger" role="alert">
                <FormattedMessage id='project.drafts.ListDrafts.noDraftsFound'/>
            </div>
        );
    }

    return (

        <div>
            <h4><FormattedMessage id="project.app.Header.drafts"/></h4>
            <Drafts drafts={drafts}/>
            <br />
            <br />
            <button className='roundedButtonCentered' onClick={() => {navigate("/drafts/form")}}><FormattedMessage id="project.parts.createDraft"/></button>
        </div>

    );

}

export default ListAllDraftsResult;