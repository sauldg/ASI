import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

const Drafts = ({drafts}) => (

    <table className="table table-striped table-hover">

        <thead>
        <tr>
            <th scope="col">
                <FormattedMessage id='project.global.fields.shipping_details'/>
            </th>
            <th scope="col">
                <FormattedMessage id='project.global.fields.invoicing_details'/>
            </th>
            <th scope="col">
                <FormattedMessage id='project.global.fields.providers'/>
            </th>
            <th scope="col">
                <FormattedMessage id='project.global.fields.state'/>
            </th>
        </tr>
        </thead>

        <tbody id="tableDrafts">
        {drafts.map(draft =>
            <tr key={draft.id}>
                <td>{draft.id}</td>
                
            </tr>
        )}
        </tbody>

    </table>

);

Drafts.propTypes = {
    drafts: PropTypes.array.isRequired,
};

export default Drafts;