import {FormattedMessage} from 'react-intl';
import {useSelector} from 'react-redux';
import * as selectors from '../selectors';
import Parts from './Parts';

const ListAllPartsResult = () => {

    const part = useSelector(selectors.getParts);

    if (!part) {
        return (<h4>{"No funciona"}</h4>);
    }

   if (part.length === 0) {
        return (
            <div className="alert alert-danger" role="alert">
                <FormattedMessage id='project.parts.ListParts.noPartsFound'/>
            </div>
        );
    }

    return (

        <div>
            <h4><FormattedMessage id="project.app.Header.parts"/></h4>
            <Parts parts={part}/>
        </div>

    );

}

export default ListAllPartsResult;