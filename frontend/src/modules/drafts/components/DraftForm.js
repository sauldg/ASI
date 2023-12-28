import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDraft } from './../actions';
import * as appSelectors from '../../app/selectors';
import * as draftSelectors from '../../drafts/selectors';
import * as partSelectors from '../../parts/selectors';
import * as actions from '../../parts/actions';
import { FormattedMessage } from 'react-intl';
import { BackLink } from '../../common';
import {useNavigate} from 'react-router-dom';

const DraftForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const parts = useSelector(draftSelectors.getParts);
    const part = useSelector(partSelectors.getPart);
    const profile = useSelector(appSelectors.getProfile);

    useEffect(() => {
        // Dispatch the listAllParts action when the component mounts
        dispatch(actions.listAllParts());
    }, [dispatch]);


    const [formState, setFormState] = useState({
        shippingDetails: '',
        invoicingDetails: '',
        providers: (part !== null ? part.provider : ''),
        selectedPart: (part !== null ? part : ''),
        amount: (part !== null ? part.amount : 1),
        stocks: [], // Initialize stocks array
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevFormState) => ({
            ...prevFormState,
            [name]: value,
        }));
    };

    const handlePartChange = (e) => {
        const selectedPartId = parseInt(e.target.value, 10);
        const selectedPart = parts.find((part) => part.id === selectedPartId);
        setFormState((prevFormState) => ({
            ...prevFormState,
            selectedPart,
        }));
    };

    const handleAddStock = (e) => {
        e.preventDefault();
        const { selectedPart, amount } = formState;
        if (selectedPart && amount > 0) {
            const newStock = {
                part: selectedPart,
                amount: parseInt(amount, 10),
            };
            setFormState((prevFormState) => ({
                ...prevFormState,
                stocks: [...prevFormState.stocks, newStock],
                selectedPart: (part !== null ? part : formState.selectedPart),
                amount: (part !== null ? part.amount : formState.amount),
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createDraft(formState, () => {
                // Handle success, e.g., redirect to another page
                console.log('Draft created successfully');
            }, (errors) => {
                // Handle errors, e.g., display error messages
                console.error('Error creating draft:', errors);
            })
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            {profile === "admin" &&
                <div>
                    <label>
                        <FormattedMessage id="project.drafts.shippingDetails"/>: &nbsp;
                        <input
                            type="text"
                            name="shippingDetails"
                            value={formState.shippingDetails}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        <FormattedMessage id="project.drafts.invoicingDetails"/>: &nbsp;
                        <input
                            type="text"
                            name="invoicingDetails"
                            value={formState.invoicingDetails}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        <FormattedMessage id="project.drafts.providers"/>: &nbsp;
                        <input
                            type="text"
                            name="providers"
                            value={((formState.providers.length == 0 && part !== null) ? part.provider : formState.providers) }
                            onChange={handleChange}
                        />
                    </label>
                </div>
            }
            <br />
            <label>
                <FormattedMessage id="project.drafts.selectPart"/>: &nbsp;
                <select name="selectedPart" 
                    onChange={handlePartChange}
                    value={(formState.selectedPart === null && part !== null) ? part.id : formState.selectedPart?.id}
                    >
                    {parts.map((part) => (
                        <option key={part.id} value={part.id}>
                            {part.name}
                        </option>
                    ))}
                </select>
            </label> &nbsp; &nbsp;
            <label>
            <FormattedMessage id="project.drafts.amount"/>: &nbsp;
                <input
                    className='numberInput'
                    type="number"
                    name="amount"
                    min={1}
                    value={((formState.amount === 1 && part !== null) ? part.amount : formState.amount) }
                    onChange={handleChange}
                />
            </label> 
            <button className="rounded" type="button" onClick={handleAddStock}><FormattedMessage id="project.drafts.add"/></button>
            <ul>
                {formState.stocks.map((stock, index) => (
                    <li key={index}>
                        {stock.part.name} - {stock.amount}
                    </li>
                ))}
            </ul>
            <button className="roundedButton" onClick={(e) => {e.preventDefault();navigate(-1)}}><FormattedMessage id="project.drafts.DraftForm.cancel"/></button>
            <button className="roundedButton" type="submit" onSubmit={handleSubmit}><FormattedMessage id="project.drafts.DraftForm.save"/></button>
        </form>
    );
};

export default DraftForm;
