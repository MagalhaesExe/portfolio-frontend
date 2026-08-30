import PropTypes from 'prop-types'

export const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 ${className}`}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
