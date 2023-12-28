// DraftForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDraft } from './../actions';
import * as draftSelectors from '../../drafts/selectors';
import * as actions from '../../parts/actions';

const DraftForm = () => {
    const dispatch = useDispatch();
    const parts = useSelector(draftSelectors.getParts);

    useEffect(() => {
        // Dispatch the listAllParts action when the component mounts
        dispatch(actions.listAllParts());
    }, [dispatch]);


    const [formState, setFormState] = useState({
        shippingDetails: '',
        invoicingDetails: '',
        providers: '',
        selectedPart: null,
        amount: '',
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

    const handleAddStock = () => {
        const { selectedPart, amount } = formState;
        if (selectedPart && amount !== '') {
            const newStock = {
                part: selectedPart,
                amount: parseInt(amount, 10),
            };
            setFormState((prevFormState) => ({
                ...prevFormState,
                stocks: [...prevFormState.stocks, newStock],
                selectedPart: null,
                amount: '',
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
            <label>
                Shipping Details:
                <input
                    type="text"
                    name="shippingDetails"
                    value={formState.shippingDetails}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Invoicing Details:
                <input
                    type="text"
                    name="invoicingDetails"
                    value={formState.invoicingDetails}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Providers: 
                <input
                    type="text"
                    name="providers"
                    value={formState.providers}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Select Part: 
                <select name="selectedPart" onChange={handlePartChange} value={formState.selectedPart?.id || ''}>
                    {parts.map((part) => (
                        <option key={part.id} value={part.id}>
                            {part.name}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Amount:
                <input
                    className='numberInput'
                    type="text"
                    name="amount"
                    value={formState.amount}
                    onChange={handleChange}
                />
            </label> 
            <button className="roundedButton" type="button" onClick={handleAddStock}>Add</button>
            <ul>
                {formState.stocks.map((stock, index) => (
                    <li key={index}>
                        {stock.part.name} - {stock.amount}
                    </li>
                ))}
            </ul>
            <button className="rounded" type="submit">Create Draft</button>
        </form>
    );
};

export default DraftForm;
