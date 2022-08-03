import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Joi from 'joi';
import type { NextPage } from 'next';

import { queryToken } from 'graphql/teztok/queries';
import InputField from 'components/InputField';

interface IFormInputs {
  loanAmount: string;
}

const schema = Joi.object({
  loanAmount: Joi.number().required(),
});

const currencies = [{ name: 'USDT' }, { name: 'EURL' }, { name: 'XTZ' }];

const BorrowForm: NextPage = () => {
  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  const router = useRouter();

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const { tokenAddress, tokenId } = router.query;
  const { data, error } = queryToken({ tokenAddress, tokenId });
  const token = data?.tokens[0];

  const src = token?.thumbnail_uri?.replace('ipfs://', 'https://ipfs.io/ipfs/');

  return (
    <div className="p-12">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            {<Image layout="responsive" width={200} height={200} src={src} />}
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-black sm:p-6">
                <div className="flex justify-between	">
                  <div> Loan Amount </div>
                  <InputField
                    register={register}
                    rules={{ required: true }}
                    type="number"
                    name="loanAmount"
                    errors={formErrors}
                  ></InputField>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BorrowForm;
