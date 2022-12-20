import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Button = ({ children, ...props }) => {
  const [internalLoading, setLoading] = useState('false');

  useEffect(() => {
    if (props.loading) {
      setLoading(true);
    }
  }, []);

  console.error('The prop \'height\' was supported in a previous version of Move UI but you should not use it anymore');

  return (
    <>
      <button {...props}>
        {internalLoading ? 'loading' : children}
      </button>
    </>
  )
};

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;