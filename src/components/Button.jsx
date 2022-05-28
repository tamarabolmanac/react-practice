import PropTypes from  'prop-types'

function Button ({ children, version, type, isDissabled} ) {
    return (
        <button type={type} disabled={isDissabled} className={`btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDissabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDissabled: PropTypes.bool
}

export default Button