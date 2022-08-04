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

// export default function Borrow() {
//   const {
//     register,
//     formState: { errors: formErrors },
//     handleSubmit,
//   } = useForm<IFormInputs>({
//     resolver: joiResolver(schema),
//   });

//   const onSubmit = (data: IFormInputs) => console.log(data);

//   const router = useRouter();

//   const { tokenAddress, tokenId } = router.query;
//   const { data, error } = queryToken({ tokenAddress, tokenId });
//   const token = data?.tokens[0];

//   const src = token?.thumbnail_uri?.replace('ipfs://', 'https://ipfs.io/ipfs/');

//   const BorrowForm = () => {
//     return (
//       <div className="max-w-sm lg:w-96 p-4">
//         <div className="mt-6 text-2xl text-gray-800">List Collateral</div>

//         <div className="mt-8">
//           <div className="mt-6">
//             <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
//               <Selection
//                 register={register}
//                 name="loanCurrency"
//                 rules={{ required: true }}
//                 label="Loan Currency"
//                 list={currencies.map((item, index) => ({ ...item, id: `ccy-${index}` }))}
//               ></Selection>

//               <InputField
//                 register={register}
//                 type="number"
//                 name="loanAmount"
//                 errors={formErrors}
//                 label="Loan Amount"
//               ></InputField>

//               <InputField
//                 register={register}
//                 type="number"
//                 name="loanInterest"
//                 errors={formErrors}
//                 label="Loan Interest"
//               ></InputField>

//               <InputField
//                 register={register}
//                 type="number"
//                 name="loanInterest"
//                 errors={formErrors}
//                 label="Expiry"
//               ></InputField>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const PawnImage = () => {
//     return (
//       <div className="max-w-sm lg:w-96 p-4">
//         <div className="mt-6 text-3xl text-black">Request A Loan</div>
//         <div className="mt-8">
//           <div className="mt-6">
//             <div className="max-w-sm lg:w-96 grid">
//               <img src={src} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const PawnInformation = () => {
//     return (
//       <div className="max-w-sm lg:w-96 p-4">
//         <div className="mt-6 text-2xl text-gray-800">NFT Details</div>
//         <div className="mt-8">
//           <div>
//             <div>Platform: {token?.platform}</div>
//             <div>Name: {token?.name}</div>
//             <div>Creator: {token?.creator}</div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="flex justify-center sm:justify-start py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 flex-wrap sm:flex-nowrap">
//         <PawnImage />
//         <PawnInformation />
//         <BorrowForm />
//       </div>
//     </>
//   );
// }

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const products = [
  {
    id: 1,
    name: 'Micro Backpack',
    href: '#',
    price: '$70.00',
    color: 'Moss',
    size: '5L',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
    imageAlt:
      'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
  },
  // More products...
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

            <ul role="list" className="text-sm font-medium text-gray-900 divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex items-start py-6 space-x-4">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="flex-none w-20 h-20 rounded-md object-center object-cover"
                  />
                  <div className="flex-auto space-y-1">
                    <h3>{product.name}</h3>
                    <p className="text-gray-500">{product.color}</p>
                    <p className="text-gray-500">{product.size}</p>
                  </div>
                  <p className="flex-none text-base font-medium">{product.price}</p>
                </li>
              ))}
            </ul>

            <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Subtotal</dt>
                <dd>$320.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Shipping</dt>
                <dd>$15.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Taxes</dt>
                <dd>$26.80</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$361.80</dd>
              </div>
            </dl>

            <Popover className="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
              <div className="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
                <div className="max-w-lg mx-auto">
                  <Popover.Button className="w-full flex items-center py-6 font-medium">
                    <span className="text-base mr-auto">Total</span>
                    <span className="text-base mr-2">$361.80</span>
                    <ChevronUpIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-y-full"
                    enterTo="translate-y-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-full"
                  >
                    <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                      <dl className="max-w-lg mx-auto space-y-6">
                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Subtotal</dt>
                          <dd>$320.00</dd>
                        </div>

                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Shipping</dt>
                          <dd>$15.00</dd>
                        </div>

                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Taxes</dt>
                          <dd>$26.80</dd>
                        </div>
                      </dl>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </Popover>
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
