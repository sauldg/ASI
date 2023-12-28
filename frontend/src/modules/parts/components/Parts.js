import {FormattedMessage, useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import * as actions from '../actions';

const Parts = ({parts}) => {
    const [inputValues, setInputValues] = useState(parts.map(() => ''));
    const [addButtonEnabled, setAddButtonEnabled] = useState(parts.map(() => false));
    const [reduceButtonEnabled, setReduceButtonEnabled] = useState(parts.map(() => false));
    const dispatch = useDispatch();
    const intl = useIntl();

    const reduceText = intl.formatMessage({id: 'project.global.fields.reduceButton'});
    const increaseText = intl.formatMessage({id: 'project.global.fields.increaseButton'});

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);

        const increaseButtonEnabled = newInputValues.map((inputValue) => {
            const inputNumber = parseInt(inputValue);
            return inputNumber >= 1;
        });
        const decreaseButtonEnabled = newInputValues.map((inputValue, i) => {
            const inputNumber = parseInt(inputValue);
            return inputNumber >= 1 && inputNumber <= parts[i].amount;
        });
        setAddButtonEnabled(increaseButtonEnabled);
        setReduceButtonEnabled(decreaseButtonEnabled)
    };
    
    const handleAddClick = (index) => {
        const partAmount = parts[index].amount
        const inputValue = inputValues[index];
        const isConfirmed = window.confirm(`Piezas actuales: ${partAmount}\nPiezas a añadir: ${inputValue}\nTotal: ${parseInt(inputValue) + parseInt(partAmount)}\n¿Estás seguro?`);

        if (isConfirmed) {
            dispatch(actions.modifyAmount(parts[index].id, parseInt(inputValue), () => {dispatch(actions.listAllParts())}, (errors) => {console.log(errors);}));
        }
    };

    const handleReduceClick = (index) => {
        const partAmount = parts[index].amount
        const inputValue = inputValues[index];
        const isConfirmed = window.confirm(`Piezas actuales: ${partAmount}\nPiezas a reducir: ${inputValue}\nTotal: ${parseInt(partAmount) - parseInt(inputValue)}\n¿Estás seguro?`);

        if (isConfirmed) {
            dispatch(actions.modifyAmount(parts[index].id, -parseInt(inputValue), () => {dispatch(actions.listAllParts())}, (errors) => {console.log(errors);}));
        }
    };

    return (
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
                    <FormattedMessage id='project.global.fields.providers'/>
                </th>
                <th scope="col">
                    <FormattedMessage id='project.global.fields.amount'/>
                </th>
                <th scope="col">
                    <FormattedMessage id='project.global.fields.modifyStock'/>
                </th>
            </tr>
            </thead>

            <tbody id="tableDrafts">
            {parts.map((part, index) =>
                <tr key={part.id}>
                    <td>
                        <Link id="partLink" to={`/parts/${part.id}`}>
                            {part.id}
                        </Link>
                    </td>
                    <td>{part.name}</td>
                    <td>{part.reference}</td>
                    <td>{part.description}</td>
                    <td>{part.provider}</td>
                    <td>{part.amount}</td>
                    <td><input className="numberInput" type={"number"} maxLength="4" size="4" min={"0"} value={inputValues[index]}
                               onChange={(e) => handleInputChange(index, e.target.value)}></input>&nbsp;

                        <button className="roundedButton" type="button" disabled={!addButtonEnabled[index]} onClick={() => handleAddClick(index)}>{increaseText}</button>&nbsp;
                        <button className="roundedButton" type="button" disabled={!reduceButtonEnabled[index]} onClick={() => handleReduceClick(index)}>{reduceText}</button>
                    </td>

                </tr>
            )}
            </tbody>

        </table>

    );
};

Parts.propTypes = {
    parts: PropTypes.array.isRequired,
};

export default Parts;