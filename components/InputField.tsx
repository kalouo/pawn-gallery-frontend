import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { UseFormRegister } from 'react-hook-form';
import { sentenceCase } from 'change-case';

type Props = {
  type: string;
  name: string;
  rules: { [key: string]: any };
  register: UseFormRegister<any>;
  errors: { [key: string]: { message?: string } };
  placeholder?: string;
  additionalClasses?: string;
};

const InputField = ({
  register,
  additionalClasses,
  errors,
  name,
  placeholder,
  rules,
  type,
}: Props) => {
  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          {...register(name, rules)}
          id={name}
          placeholder={placeholder}
          type={type}
          className={`text-black shadow-sm focus:ring-transparent focus:border-transparent block w-full sm:text-sm rounded-md ${additionalClasses}`}
        />
        {errors[name]?.message ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-red-600">
        {(errors[name]?.message as string)?.replace(name, sentenceCase(name)).replace(/['"]+/g, '')}
      </p>
    </div>
  );
};

export default InputField;
