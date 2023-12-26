import {FormattedMessage} from 'react-intl';
import {useSelector} from 'react-redux';
import * as selectors from '../selectors';
import Drafts from './Drafts';

const ListAllDraftsResult = () => {

    const draft = useSelector(selectors.getDrafts);

    if (!draft) {
        return (<h4>{"No funciona"}</h4>);
    }

   if (draft.length === 0) {
        return (
            <div className="alert alert-danger" role="alert">
                <FormattedMessage id='project.drafts.ListDrafts.noDraftsFound'/>
            </div>
        );
    }

    //<Drafts drafts={draft.result.items}/>

    return (

        <div>
            <h4><FormattedMessage id="project.drafts.ListDrafts.id"/></h4>
            <Drafts drafts={draft}/>
        </div>

    );

}

export default ListAllDraftsResult;