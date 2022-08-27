/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import { Result } from '@zxing/library';
import dynamic from 'next/dynamic';
import React from 'react';
const BarcodeScannerComponent = dynamic(
  () => import('react-qr-barcode-scanner'),
  { ssr: false }
);

type QrReaderModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBookingId: React.Dispatch<React.SetStateAction<string>>;
};

export default function QrReaderModal({
  isOpen,
  setIsOpen,
  setBookingId,
}: QrReaderModalProps) {
  const resultHandler = (result: Result | null | undefined) => {
    if (result) {
      setBookingId(result.getText());
      closeModal();
    }
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-hidden'
        onClose={closeModal}
      >
        <div className='bg-cdark/80 min-h-screen px-4 text-center'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='translate-x-96 md:translate-y-96 opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='translate-x-96 md:translate-y-96 opacity-0 scale-95'
          >
            <div className='inline-block w-full max-w-3xl transform overflow-hidden text-left align-middle transition-all'>
              <div className='layout flex flex-col items-center'>
                <div className='relative w-full'>
                  <p className='absolute top-24 left-1/2 z-10 -translate-x-1/2'>
                    please scan your{' '}
                    <span className='inline-flex items-center justify-center rounded-full bg-cgreen px-2'>
                      barcode
                    </span>{' '}
                    here
                  </p>
                  <BarcodeScannerComponent
                    width='100%'
                    height={200}
                    onUpdate={(err, result) => {
                      if (result) resultHandler(result);
                    }}
                    facingMode='user'
                  />
                  <p className='absolute bottom-24 left-1/2 z-10 -translate-x-1/2'>
                    scanning booking number...
                  </p>
                  <div className='absolute inset-0 z-20 flex items-center justify-center p-32'>
                    <div className='aspect-h-1 aspect-w-1 border-clight w-full border border-dashed'></div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
