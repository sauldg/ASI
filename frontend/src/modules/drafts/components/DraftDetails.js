import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { BackLink } from '../../common';
import * as draftActions from '../actions';
import { useState } from 'react';
import {Link} from 'react-router-dom';


const DraftDetails = () => {
    const draft = useSelector(selectors.getDraft);
    const uDraft = useSelector(selectors.getDrafts);
    const [drafts, setDrafts] = useState(uDraft);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {

        const draftId = id;

        if(!Number.isNaN(draftId)) {
            dispatch(actions.getDraftById(draftId));
        }

        
        if(draft.length == 0) {
            dispatch(draftActions.listAllDrafts((drafts) => {setDrafts(drafts)}));
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

                <h4 id="state">
                    <FormattedMessage id='project.app.Header.parts'/>
                </h4>

                <table className="table table-striped table-hover">

                    <thead>
                    <tr>
                        <th scope="col">
                            <FormattedMessage id='project.global.fields.id'/>
                        </th>
                        <th scope="col">
                            <FormattedMessage id='project.global.fields.name'/>
                        </th>
                        <th scope="col">
                            <FormattedMessage id='project.global.fields.reference'/>
                        </th>
                        <th scope="col">
                            <FormattedMessage id='project.global.fields.descripcion'/>
                        </th>
                        <th scope="col">
                            <FormattedMessage id='project.global.fields.amount'/>
                        </th>

                        <th scope="col">
                            <FormattedMessage id='project.global.fields.price'/>
                        </th>
                    </tr>
                    </thead>

                    <tbody id="tableStock">
                    {drafts[id-1].stocks.map(stock =>
                    <tr key={stock.part.id}>
                        <td>
                            <Link id="stockLink" to={`/parts/${stock.part.id}`}>
                                {stock.part.id}
                            </Link>
                        </td>
                        <td>{stock.part.name}</td>
                        <td>{stock.part.reference}</td>
                        <td>{stock.part.description}</td>
                        <td>{stock.amount}</td>
                        <td>{stock.part.price}</td>
                    </tr>
                )}
                    </tbody>

                </table>

                
            </div>
        </div>
    );
};

export default DraftDetails;
