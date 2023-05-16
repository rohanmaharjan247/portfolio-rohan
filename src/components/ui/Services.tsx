import { ServiceProps } from '@/helpers/props';
import {
  IconDefinition,
  IconLookup,
  IconName,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getIcon = (iconName: IconName) => {
  const iconLookup: IconLookup = { prefix: 'fas', iconName };
  const iconDefinition: IconDefinition = findIconDefinition(iconLookup);

  return iconDefinition;
};

const Services = ({ service }: ServiceProps) => {
  return (
    <div className="card px-4 w-64 max-w-sm my-8">
      <FontAwesomeIcon
        icon={getIcon(
          (service?.fields?.iconName?.toString() as IconName) ??
            'exclamation-square'
        )}
        size="2xl"
      />
      <h1 className="py-4 font-bold text-sm">
        {service.fields.title.toString()}
      </h1>
      <p className="text-sm text-slate-400">
        {service.fields.description.toString()}
      </p>
    </div>
  );
};

export default Services;
