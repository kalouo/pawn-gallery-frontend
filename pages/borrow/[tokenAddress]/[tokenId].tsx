import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Joi from 'joi';

import { queryToken } from 'graphql/teztok/queries';
import InputField from 'components/InputField';
import Selection from 'components/Selection';

interface IFormInputs {
  loanAmount: string;
}

const schema = Joi.object({
  loanAmount: Joi.number().required(),
  loanInterest: Joi.number().required(),
  loanCurrency: Joi.string().required(),
});

const currencies = [
  { name: 'XTZ', imageUrl: '/images/currencies/xtz.png' },
  { name: 'USDT', imageUrl: '/images/currencies/usdt.png' },
  { name: 'EURL', imageUrl: '/images/currencies/eurl.png' },
];

export default function Example() {
  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  const router = useRouter();

  const { tokenAddress, tokenId } = router.query;
  const { data, error } = queryToken({ tokenAddress, tokenId });
  const token = data?.tokens[0];

  const src = token?.thumbnail_uri?.replace('ipfs://', 'https://ipfs.io/ipfs/');

  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div className="hidden lg:block w-1/2 h-full bg-white" aria-hidden="true" />
      <div className="hidden lg:block w-1/2 h-full bg-gray-500" aria-hidden="true" />

      <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
        <h1 className="sr-only">NFT Information</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              NFT Information
            </h2>

            <div className="divide-y divide-gray-200 flex justify-center">
              <div className="py-6">
                <img src={src} />
              </div>
            </div>

            <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Name</dt>
                <dd>{token?.name}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Platform</dt>
                <dd>{token?.platform}</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6"></div>
            </dl>
          </div>
        </section>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <section>
              <h2 id="payment-heading" className="text-lg font-medium text-gray-900">
                Loan Request
              </h2>

              <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                <div className="col-span-3 sm:col-span-4">
                  <Selection
                    register={register}
                    name="loanCurrency"
                    rules={{ required: true }}
                    label="Loan Currency"
                    list={currencies.map((item, index) => ({ ...item, id: `ccy-${index}` }))}
                  ></Selection>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <InputField
                    register={register}
                    type="number"
                    name="loanAmount"
                    errors={formErrors}
                    label="Loan Amount"
                  ></InputField>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <InputField
                    register={register}
                    type="number"
                    name="loanInterest"
                    errors={formErrors}
                    label="Loan Interest"
                  ></InputField>
                </div>
              </div>
            </section>

            <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:ml-6 sm:order-last sm:w-auto"
              >
                LIST COLLATERAL
              </button>
              <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
