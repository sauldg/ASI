import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Drafts = ({drafts}) => (

    <table className="table table-striped table-hover">

        <thead>
        <tr>
            <th scope="col">
                <FormattedMessage id='project.global.fields.id'/>
            </th>
            <th scope="col">
                <FormattedMessage id='project.global.fields.shippingDetails'/>
            </th>
            <th scope="col">
                <FormattedMessage id='project.global.fields.invoicingDetails'/>
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
                <td>
                    <Link id="draftLink" to={`/drafts/${draft.id}`}>
                        {draft.id}
                    </Link>
                </td>
                <td>{draft.shippingDetails}</td>
                <td>{draft.invoicingDetails}</td>
                <td>{draft.providers}</td>
                <td>{draft.state}</td>
                
            </tr>
        )}
        </tbody>

    </table>

);

Drafts.propTypes = {
    drafts: PropTypes.array.isRequired,
};

export default Drafts;