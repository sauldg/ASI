import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Parts = ({parts}) => (

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
                <FormattedMessage id='project.global.fields.price'/>
            </th>
            <th scope="col">
                <FormattedMessage id='project.global.fields.amount'/>
            </th>
            <th scope="col">
                <FormattedMessage id='project.global.fields.providers'/>
            </th>
        </tr>
        </thead>

        <tbody id="tableDrafts">
        {parts.map(part =>
            <tr key={part.id}>
                <td>
                    <Link id="partLink" to={`/parts/${part.id}`}>
                        {part.id}
                    </Link>
                </td>
                <td>{part.name}</td>
                <td>{part.price}</td>
                <td>{part.amount}</td>
                <td>{part.provider}</td>
                
            </tr>
        )}
        </tbody>

    </table>

);

Parts.propTypes = {
    parts: PropTypes.array.isRequired,
};

export default Parts;