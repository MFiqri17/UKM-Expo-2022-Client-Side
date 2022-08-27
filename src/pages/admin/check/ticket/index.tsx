import React from 'react';

import BarcodeScannerModal from '@/components/barcode/BarcodeScannerModal';

export default function CheckTicketPage() {
  const [bookingId, setBookingId] = React.useState<string>('');
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <div>
      <BarcodeScannerModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        setBookingId={setBookingId}
      />
      <button onClick={() => setIsModalOpen(true)}>Test</button>
      {bookingId}
    </div>
  );
}
