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
      <button
        onClick={handleClick}
        type="button"
        className="sm:hidden flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </>
  );
};

export default ConnectionButton;
