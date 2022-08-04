import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Joi from 'joi';
import type { NextPage } from 'next';

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

export default function Borrow() {
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

  const BorrowForm = () => {
    return (
      <div className="max-w-sm lg:w-96 p-4">
        <div className="mt-6 text-2xl text-gray-800">List Collateral</div>

        <div className="mt-8">
          <div className="mt-6">
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
              <Selection
                register={register}
                name="loanCurrency"
                rules={{ required: true }}
                label="Loan Currency"
                list={currencies.map((item, index) => ({ ...item, id: `ccy-${index}` }))}
              ></Selection>

              <InputField
                register={register}
                type="number"
                name="loanAmount"
                errors={formErrors}
                label="Loan Amount"
              ></InputField>

              <InputField
                register={register}
                type="number"
                name="loanInterest"
                errors={formErrors}
                label="Loan Interest"
              ></InputField>

              <InputField
                register={register}
                type="number"
                name="loanInterest"
                errors={formErrors}
                label="Expiry"
              ></InputField>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const PawnImage = () => {
    return (
      <div className="max-w-sm lg:w-96 p-4">
        <div className="mt-6 text-3xl text-black">Request A Loan</div>
        <div className="mt-8">
          <div className="mt-6">
            <div className="max-w-sm lg:w-96 grid">
              <img src={src} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PawnInformation = () => {
    return (
      <div className="max-w-sm lg:w-96 p-4">
        <div className="mt-6 text-2xl text-gray-800">NFT Details</div>
        <div className="mt-8">
          <div>
            <div>Platform: {token?.platform}</div>
            <div>Name: {token?.name}</div>
            <div>Creator: {token?.creator}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-center sm:justify-start py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 flex-wrap sm:flex-nowrap">
        <PawnImage />
        <PawnInformation />
        <BorrowForm />
      </div>
    </>
  );
}
