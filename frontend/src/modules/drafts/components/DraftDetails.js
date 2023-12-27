import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { BackLink } from '../../common';


const DraftDetails = () => {
    const draft = useSelector(selectors.getDraft);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {

        const draftId = id;

        if(!Number.isNaN(draftId)) {
            dispatch(actions.getDraftById(draftId));
        }

        return () => dispatch(actions.clearDraft());

    }, [id, dispatch]);

    if (!draft) {
        return <h1>{"No funciona"}</h1>;
    }

    return (
        
        <div>
            <BackLink/>
            <div className="card text-center">
                <h5 id="id">
                    <FormattedMessage id='project.global.fields.id'/>
                    {": " + draft.id}
                </h5>
                <h5 id="shippingDetails">
                    <FormattedMessage id='project.global.fields.shippingDetails'/>
                    {": " + draft.shippingDetails}
                </h5>
                <h5 id="invoicingDetails">
                    <FormattedMessage id='project.global.fields.invoicingDetails'/>
                    {": " + draft.invoicingDetails}
                </h5>
                <h5 id="providers">
                    <FormattedMessage id='project.global.fields.providers'/>
                    {": " + draft.providers}
                </h5>
                <h5 id="state">
                    <FormattedMessage id='project.global.fields.state'/>
                    {": " + draft.state}
                </h5>
            </div>
        </div>
    );
};

export default DraftDetails;
