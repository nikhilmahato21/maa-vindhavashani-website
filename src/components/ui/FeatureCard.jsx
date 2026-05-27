import * as LucideIcons from 'lucide-react';

export const FeatureCard = ({ feature }) => {
  const { icon, title, description } = feature;
  const IconComponent = LucideIcons[icon];

  return (
    <div className="flex items-center space-x-4">
      <div className="bg-blue-900 text-white rounded-full p-3">
        {IconComponent && <IconComponent size={24} />}
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};
