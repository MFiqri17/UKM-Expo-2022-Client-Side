import React, { useRef, useState } from 'react';

import RegisterLayout from '@/components/register/RegisterLayout';

interface IFileState {
  file: File | null;
  src: string;
  dimension: {
    width: number;
    height: number;
  };
}

const pembayaran = [
  {
    uid: 0,

    name: 'Gopay',
    noRek: '082143719390',
    atasNama: 'maitsa adzro fania',
  },
  {
    uid: 1,

    name: 'OVO',
    noRek: '082143719390',
    atasNama: 'maitsa adzro fania',
  },
  {
    uid: 2,

    name: 'Shopee Pay',
    noRek: '088804821572',
    atasNama: 'maitsadzr',
  },
  {
    uid: 3,

    name: 'Bank BRI',
    noRek: '365601027280538',
    atasNama: 'maitsa adzro fania',
  },
];

export default function Register() {
  const [harga, setHarga] = useState(25000);
  const [price, setPrice] = useState(harga);
  const [quantity, setQuantity] = useState(1);
  const fileRef = useRef<HTMLInputElement>(null);
  const initialFileState: IFileState = {
    file: null,
    src: '',
    dimension: { width: 0, height: 0 },
  };
  const [Img, setImg] = React.useState(initialFileState);
  const [payment, setPayment] = React.useState('');
  const [noRekening, setNoRekening] = React.useState('');
  const [nama, setNama] = React.useState('');

  const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.valueAsNumber);
    setPrice(e.target.valueAsNumber * harga);
  };

  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.valueAsNumber);
    setQuantity(e.target.valueAsNumber);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImg((prev) => ({ ...prev, file: file }));
    e.target.files;
  };

  React.useEffect(() => {
    const newLocal = pembayaran[0].name;
    return setPayment(newLocal);
  }, []);

  React.useEffect(() => {
    const newLocal = pembayaran[0].noRek;
    return setNoRekening(newLocal);
  }, []);

  React.useEffect(() => {
    const newLocal = pembayaran[0].atasNama;
    return setNama(newLocal);
  }, []);

  const changeState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPayment(pembayaran[e.target.value].name);
    setNoRekening(pembayaran[e.target.value].noRek);
    setNama(pembayaran[e.target.value].atasNama);
  };

  React.useEffect(() => {
    const fileReader = new FileReader();
    let isCancel = false;
    if (Img) {
      fileReader.onload = () => {
        const result = fileReader.result;
        if (result && !isCancel) {
          const img = new Image();
          img.onload = () => {
            const height = img.height;
            const width = img.width;
            setImg((prev) => ({
              ...prev,
              dimension: { height, width },
            }));
          };
          img.src = result.toString();
          setImg((prev) => ({ ...prev, src: result.toString() }));
        }
      };
      if (Img.file) {
        fileReader.readAsDataURL(Img.file);
      }
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [Img]);

  return (
    <>
      <RegisterLayout>
        <h3 className='mb-[90px] mt-[45px] text-center text-[26px] font-bold text-cblack'>
          Form Pendaftaran
        </h3>
        <form
          action=''
          className='mb-[50px] flex flex-col space-y-[45px] px-[78px]'
        >
          <div className='font-mediumtext-cblack flex flex-col space-y-2 '>
            <label className='text-xl font-semibold'>Nama Lengkap</label>
            <input
              id='name'
              type='text'
              className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
              placeholder='Masukkan nama lengkap kamu'
              name='name'
              required
            />
          </div>
          <div className='font-mediumtext-cblack flex flex-col space-y-2'>
            <label className='text-xl font-semibold'>Email</label>
            <input
              id='email'
              type='email'
              className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
              placeholder='Masukkan email aktif kamu'
              name='email'
              required
            />
          </div>
          <div className='font-mediumtext-cblack flex flex-col space-y-2'>
            <label className='text-xl font-semibold'>No telepon</label>
            <input
              id='telepon'
              type='text'
              className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
              placeholder='Masukkan nomor telepon kamu'
              name='noTelepon'
              required
            />
          </div>
          <div className='font-mediumtext-cblack flex flex-col space-y-2'>
            <label className='text-xl font-semibold'>
              Pilih Opsi Pembayaran
            </label>
            <select
              disabled={!pembayaran.length}
              onChange={changeState}
              className='rounded-md !border border-[#6B7280] bg-transparent  p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
            >
              {pembayaran.map((pay) => (
                <option key={pay.uid} value={pay.uid} className='focus:bg-black'>
                  {pay.name}
                </option>
              ))}
            </select>
          </div>
          <div className='font-mediumtext-cblack flex flex-col space-y-2'>
            <label
              className='text-xl font-semibold'
              onChange={(e: any) => {
                setPayment(e.target.value);
                setNoRekening(pembayaran[e.target.key]['noRek']);
                setNama(pembayaran[e.target.key]['atasNama']);
              }}
            >
              {payment == 'Bank BRI' ? `Nomor rekening` : `Nomor ${payment}`}
            </label>
            <input
              min={0}
              id='rekening'
              type='number'
              className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
              placeholder={payment == 'Bank BRI' ? `Masukkan nomor rekening kamu` : `Masukkan Nomor ${payment} kamu`}
              name='rekening'
              required
            />
          </div>
          <div className='font-mediumtext-cblack flex flex-col space-y-2 md:w-[363px]'>
            <label className='text-xl font-semibold'>
              Kode referral Student Ambassador
            </label>
            <input
              id='kode'
              type='text'
              className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
              placeholder='Masukkan nomor kode referral kamu'
              name='kode'
              required
            />
          </div>
          <div className='flex flex-col justify-center space-y-[30px] md:flex-row md:justify-start md:space-y-0 md:space-x-5'>
            <div className='font-mediumtext-cblack flex flex-col space-y-2'>
              <label className='text-xl font-semibold'>Total harga</label>
              <input
                id='name'
                type='text'
                className='rounded-md !border  border-cgreen bg-transparent p-2 !ring-cgreen'
                placeholder='Masukkan nama lengkap kamu'
                name='harga'
                disabled
                value={`RP. ${price}`}
                onChange={changeQuantity}
                required
              />
            </div>
            <div className='font-mediumtext-cblack flex flex-col space-y-2 md:w-[382px]'>
              <label className='text-xl font-semibold'>Jumlah tiket</label>
              <input
                id='name'
                type='number'
                className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
                placeholder='Masukkan jumlah tiket yang kamu beli'
                name='quantity'
                value={quantity}
                onChange={changePrice}
                min={1}
                required
              />
            </div>
          </div>
          <div className='font-mediumtext-cblack flex flex-col space-y-2'>
            <label className='text-xl font-semibold'>
              Upload bukti transfer kamu
            </label>
            <div className='flex flex-row items-center justify-start'>
              <button
                id='buton'
                type='button'
                className=' flex items-center rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
                onClick={(e) => {
                  e.preventDefault();
                  fileRef?.current?.click();
                }}
              >
                {' '}
                <img className='mr-4' src='images/upload.svg' alt='' /> Add File{' '}
              </button>
              <input
                ref={fileRef}
                onChange={handleChange}
                multiple={false}
                id='inputan'
                name='bukti-tf'
                type='file'
                className=' hidden rounded-md !border border-[rgb(107,114,128)] bg-transparent autofill:bg-transparent focus:!border-pink-200 focus:!ring-pink-200  focus-visible:!border-pink-200'
                placeholder='Masukkan nomor WhatsApp anggota 1'
                required
              />
            </div>
          </div>
          <div>
            <img src={Img.src} alt='' />
          </div>

          <img className='my-[45px]' src='svg/Line 17.svg' alt='' />

          <div className=''>
            <h5 className='text-xl font-semibold text-black'>
              Rekening Tujuan
            </h5>
            <p className='text-xl font-medium text-black'>{payment}</p>
            <p className='text-xl font-medium text-black'>
              {payment == 'Bank BRI' ? `No rekening` : `No ${payment}`} -{' '}
              {noRekening}{' '}
            </p>
            <p className='text-xl font-medium text-black'>{`a/n ${nama}`}</p>
          </div>

          <div className='flex justify-center'>
            <button className='w-[13.75rem] rounded-[20px] bg-gradient-to-r from-cgreen to-cgreenb py-[10px] text-xl font-semibold text-cblack'>
              Daftar
            </button>
          </div>
        </form>
      </RegisterLayout>
    </>
  );
}
