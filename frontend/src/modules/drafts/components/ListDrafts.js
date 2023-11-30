import {useDispatch} from 'react-redux';

import * as actions from '../actions';
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";



const ListDrafts = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        dispatch(actions.listAllDrafts());
        navigate('all-results') //??? sustituye a history.push¿
    });

    return null;
}

export default ListDrafts;