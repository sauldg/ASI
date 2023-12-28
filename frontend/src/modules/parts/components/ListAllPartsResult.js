import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import * as selectors from '../selectors';
import Parts from './Parts';

const ListAllPartsResult = () => {
    const parts = useSelector(selectors.getParts);
    const [searchTerm, setSearchTerm] = useState('');

    if (!parts) {
        return <h4>{"No funciona"}</h4>;
    }else{
        console.log(parts);
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
                placeholder="Buscar por nombre, referencia o descripción"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Parts parts={filteredParts}/>
        </div>
    );
};

export default ListAllPartsResult;
