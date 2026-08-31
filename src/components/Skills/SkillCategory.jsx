import PropTypes from 'prop-types'
import { Card } from '../common/Card'
import { getSkillIcon } from './skillIcons'

export const SkillCategory = ({ category, items }) => {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
        {category}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((skill) => {
          const { icon: Icon, color } = getSkillIcon(skill)
          return (
            <div
              key={skill}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              <Icon size={18} style={{ color }} className="dark:brightness-125 shrink-0" />
              <span className="truncate">{skill}</span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

SkillCategory.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}
