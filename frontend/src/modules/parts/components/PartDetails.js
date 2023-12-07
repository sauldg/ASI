//haz una página de detalles de piezas que muestre la información de la pieza y la lista de comentarios
// Path: frontend/src/modules/parts/components/PartDetails.js

import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FormattedDate, FormattedMessage, FormattedTime} from 'react-intl';
import {useParams} from 'react-router-dom';

import * as selectors from '../selectors';
import * as actions from '../actions';
import {BackLink} from '../../common';

const PartDetails = () => {
    const part = useSelector(selectors.getPartById);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {

        const partId = Number(id);

        if (!Number.isNaN(partId)) {
            dispatch(actions.getPartById(partId));
        }

        return () => dispatch(actions.clearPart());


    }, [id, dispatch]);

    if (!part) {
        return null;
    }

    return(
        <div>
            <BackLink/>

            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">{part.name}</h5>
                    <h6 id="name">
                        <FormattedMessage id='project.global.fields.name'/>
                    </h6>
                </div>
                <h7 id="reference">
                    <FormattedMessage id='project.global.fields.descripcion'/>
                    {": " + part.reference}
                </h7>
                <h7 id="descripcion">
                    <FormattedMessage id='project.global.fields.descripcion'/>
                    {": " + part.description}
                </h7>
                
                <h7 id="price">
                    <FormattedMessage id='project.global.fields.price'/>
                    {": " + part.price}
                </h7>

                <h7 id="amount">
                    <FormattedMessage id='project.global.fields.amount'/>
                    {": " + part.amount}
                </h7>

                <h7 id="photoUrl">
                    <FormattedMessage id='project.global.fields.photoUrl'/>
                    {": " + part.photoUrl}
                </h7>

                <h7 id="lastPurchasePrice">
                    <FormattedMessage id='project.global.fields.lastPurchasePrice'/>
                    {": " + part.lastPurchasePrice}
                </h7>

                <h7 id="provider">
                    <FormattedMessage id='project.global.fields.provider'/>
                    {": " + part.provider}
                </h7>
            </div>

        </div>
    );
}

export default PartDetails;