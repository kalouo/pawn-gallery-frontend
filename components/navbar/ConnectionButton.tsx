import { UserCircleIcon } from '@heroicons/react/solid';

type Props = {
  handleClick: () => void;
};

const ConnectionButton = ({ handleClick }: Props) => {
  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="hidden sm:inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <UserCircleIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
        <span>CONNECT WALLET</span>
      </button>

      <UserCircleIcon onClick={handleClick} className="sm:hidden h-8 w-8" aria-hidden="true" />
    </>
  );
};

export default ConnectionButton;
