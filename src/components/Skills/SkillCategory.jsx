import PropTypes from 'prop-types'

export const SkillCategory = ({ category, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

SkillCategory.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}
