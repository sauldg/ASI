import {FormattedMessage} from 'react-intl';
import {useSelector} from 'react-redux';
import * as selectors from '../selectors';
import Drafts from './Drafts';

const ListAllDraftsResult = () => {

    const drafts = useSelector(selectors.getDrafts);

    if (!drafts) {
        return (<h4>{"No funciona"}</h4>);
    }

    if (drafts.result.items.length === 0) {
        return (
            <div className="alert alert-danger" role="alert">
                <FormattedMessage id='project.drafts.ListDrafts.noDraftsFound'/>
            </div>
        );
    }

    return (

        <div>
            <h4><FormattedMessage id="project.drafts.ListDrafts.id"/></h4>
            <Drafts draft={drafts.result.items}/>
        </div>

    );

}

export default ListAllDraftsResult;