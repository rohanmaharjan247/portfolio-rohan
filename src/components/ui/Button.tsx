import { ButtonProps } from '@/helpers/props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ title, icon, className }: ButtonProps) => {
  return (
    <button
      className={`primary-color rounded-full py-2 px-6 text-center font-bold text-sm transition-colors hover:bg-primary-300 ${className}`}
    >
      {title}
      <span className="bg-white text-slate-800 ml-2 px-2 py-1 text-sm rounded-full">
        <FontAwesomeIcon icon={icon} size="sm" />
      </span>
    </button>
  );
};

export default Button;
