import {useDispatch} from 'react-redux';

import * as actions from '../actions';
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";



const ListAllParts = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        dispatch(actions.listAllParts());
        navigate('all-results') //??? sustituye a history.push¿
    });

    return null;
}

export default ListAllParts;