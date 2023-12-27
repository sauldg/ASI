import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FormattedDate, FormattedMessage, FormattedTime} from 'react-intl';
import {useParams} from 'react-router-dom';

import * as selectors from '../selectors';
import * as actions from '../actions';
import {BackLink} from '../../common';

const PartDetails = () => {
    const part = useSelector(selectors.getPart);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {

        const partId = id;

        if (!Number.isNaN(partId)) {
            dispatch(actions.getPartById(partId));
        }

        return () => dispatch(actions.clearPart());


    }, [id, dispatch]);

    if (!part) {
        return (
            <h4>{"No funciona"}</h4>
        );
    }
    
                //FIXME: No se muestra la imagen
    return(
        <div>
            <BackLink/>

            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">{part.name}</h5>
                </div>


                <img src={`data:image/png;base64,${part.photo.content}`} alt="Imagen" />

                <h6 id="id">
                    <FormattedMessage id='project.global.fields.id'/>
                    {": " + part.id}
                </h6>
                <h6 id="reference">
                    <FormattedMessage id='project.global.fields.reference'/>
                    {": " + part.reference}
                </h6>
                <h6 id="descripcion">
                    <FormattedMessage id='project.global.fields.descripcion'/>
                    {": " + part.description}
                </h6>
                
                <h6 id="price">
                    <FormattedMessage id='project.global.fields.price'/>
                    {": " + part.price}
                </h6>

                <h6 id="amount">
                    <FormattedMessage id='project.global.fields.amount'/>
                    {": " + part.amount}
                </h6>

                <h6 id="lastPurchasePrice">
                    <FormattedMessage id='project.global.fields.lastPurchasePrice'/>
                    {": " + part.lastPurchasePrice}
                </h6>

                <h6 id="provider">
                    <FormattedMessage id='project.global.fields.providers'/>
                    {": " + part.provider}
                </h6>
            </div>

        </div>
    );
}

export default PartDetails;