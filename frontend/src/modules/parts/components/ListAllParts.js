import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import * as selectors from '../selectors';
import * as actions from '../actions';
import Parts from './Parts';

const ListAllPartsResult = () => {
    const dispatch = useDispatch();
    const parts = useSelector(selectors.getParts);
    const [searchTerm, setSearchTerm] = useState('');
    const [allParts, setAllParts] = useState(parts);

    useEffect(()=> {
        dispatch(actions.listAllParts((p) => {setAllParts(p);}));
    }, [dispatch]);

    if (!allParts) {
        return <h4>{"No funciona"}</h4>;
    }

    const filteredParts = parts.filter(
        part =>
            part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            part.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
            part.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h4><FormattedMessage id="project.app.Header.parts"/></h4>

            <input
                type="text"
                name='searchInput'
                placeholder="Buscar por nombre, referencia o descripción"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Parts parts={filteredParts}/>
        </div>
    );
};

export default ListAllPartsResult;
