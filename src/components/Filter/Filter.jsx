
import { Formik } from 'formik';
import { InpSearch, WrapSearch } from './Filter.styled';
import PropTypes from 'prop-types';


const Filter = ({ handleChangeFilter, value }) => {
    return (
        <Formik>
            <WrapSearch>
                <InpSearch placeholder='Search Contact' onChange={handleChangeFilter} value={value} />
            </WrapSearch>
        </Formik>
    );
};

export default Filter;

Filter.propTypes = {
    handleChangeFilter: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};