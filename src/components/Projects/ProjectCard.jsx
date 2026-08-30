import PropTypes from 'prop-types'
import { Card } from '../common/Card'

export const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="-mx-6 -mt-6 mb-6 w-[calc(100%+3rem)] max-w-none h-48 object-cover"
        />
      )}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {project.description}
        </p>
        {project.featured && project.longDescription && (
          <p className="text-sm text-gray-700 dark:text-gray-300 border-l-4 border-blue-500 pl-4">
            {project.longDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              GitHub →
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              Demo →
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.shape({
      github: PropTypes.string,
      demo: PropTypes.string,
    }).isRequired,
    featured: PropTypes.bool,
  }).isRequired,
}
