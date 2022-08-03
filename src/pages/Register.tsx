import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import RegisterLayout from '@/components/register/RegisterLayout';
import TicketTimer from '@/components/register/TicketTimer';
import Seo from '@/components/Seo';

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
    noRek: '08113086464',
    atasNama: 'Kirana Mahes',
  },
  {
    uid: 1,

    name: 'OVO',
    noRek: '089514623705',
    atasNama: 'achmad aunilla taftiyan',
  },
  {
    uid: 2,

    name: 'BRI',
    noRek: '365601027280538',
    atasNama: 'maitsa adzro fania',
  },
];

export default function Register() {
  interface errorLists1 {
    nama?: any;
    email?: any;
    noTelepon?: any;
    kode?: any;
    jumlah?: any;
    cost?: any;
  }

  interface errorLists2 {
    opsi?: string;
    noRek?: string;
    buktiTF?: string;
  }

  const router = useRouter();
  const [harga, setHarga] = useState(45000);
  const [isClosed, setIsClosed] = useState(false);
  const [todayDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formErrors1, setFormErrors1] = useState({} as errorLists1);
  const [formErrors2, setFormErrors2] = useState({} as errorLists2);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [step, setStep] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null);
  const initialFileState: IFileState = {
    file: null,
    src: '',
    dimension: { width: 0, height: 0 },
  };

  const MIME_TYPE = /image\/(png|jpg|jpeg)/i;
  const [Img, setImg] = React.useState(initialFileState);
  const [payment, setPayment] = React.useState('');

  const [form, setForm] = React.useState({
    nama: '',
    email: '',
    noTelepon: '',
    opsi: '',
    noRek: '',
    kode: '',
    jumlah: '',
    cost: '',
    buktiTF: '',
  });

  const changeForm = (e: any) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

    if (parseInt(form.jumlah) > 8) {
      setForm((prevState) => ({
        ...prevState,
        [e.target.id]: 8,
      }));
    }
  };

  const changeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setForm((prevState) => ({
        ...prevState,
        [e.target.id]: file,
      }));
    }
  };

  const validate1 = (values: any) => {
    interface Errors {
      nama?: string;
      email?: string;
      noTelepon?: string;
      kode?: string;
      jumlah?: string;
      cost?: string;
    }

    const errors1 = {} as Errors;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nama) {
      errors1.nama = 'Nama Lengkap wajib diisi ya!';
    }
    if (!values.email) {
      errors1.email = 'Email wajib diisi ya!';
    } else if (!regex.test(values.email)) {
      errors1.email = 'Format email tidak valid';
    }
    if (!values.noTelepon) {
      errors1.noTelepon = 'No Telepon wajib diisi ya!';
    }

    if (!values.jumlah) {
      errors1.jumlah = 'Jumlah tiket yang ingin kamu beli wajib diisi ya!';
    } else if (values.jumlah <= 0) {
      errors1.jumlah = 'Jumlah tiket yang dibeli minimal 1 ya!';
    }

    setFormErrors1(errors1);

    if (Object.keys(errors1).length === 0) {
      console.log(form);
      console.log(errors1);
      return setStep(step + 1);
    } else {
      console.log(form);
      console.log(formErrors1);
      return setStep(0);
    }
  };

  const validate2 = (values: any) => {
    interface Errors {
      opsi?: string;
      noRek?: string;
      buktiTF?: string;
    }

    const errors2 = {} as Errors;
    const file = values.buktiTF;

    if (!values.opsi) {
      errors2.opsi = 'Opsi Pembayaran wajib diisi ya!';
    }
    if (!values.noRek) {
      errors2.noRek = 'Nomor yang kamu gunakan untuk transaksi wajib diisi ya!';
    }
    if (!values.buktiTF) {
      errors2.buktiTF = 'Bukti Transfer kamu wajib diisi ya!';
    } else if (!file.type.match(MIME_TYPE)) {
      errors2.buktiTF = 'Format tidak didukung silahkan masukkan gambar';
    }

    setFormErrors2(errors2);

    if (Object.keys(errors2).length !== 0) {
      return setStep(1);
    }
  };

  // React.useEffect(() => {
  //   //formErrors.nama === undefined || formErrors.email === undefined || formErrors.jumlah === undefined || formErrors.noTelepon === undefined
  //   if (Object.keys(formErrors).length === 0) {
  //     console.log(formErrors)
  //     setError(false);
  //   } else {
  //     console.log(formErrors)
  //     setError(true);
  //   }
  //   // if (Object.keys(formErrors).length === 0) {
  //   //   console.log(form);
  //   // }
  // }, [formErrors]);

  // const validate2 = (values:any) => {
  //   const errors = {} as Errors;

  // }

  const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.valueAsNumber);
    setPrice(e.target.valueAsNumber * harga);
  };

  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.valueAsNumber * harga);
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
    fetch('https://admin.tesdeveloper.me/api/ticketing')
      .then((res) => res.json())
      .then((data) => {
        let total = 0;
        data.data.forEach((ticket: any) => {
          total += parseInt(ticket.ticket_total);
        });
        setTotal(total);
        if (todayDate.getMonth() >= new Date(2022, 8, 5).getMonth()) {
          if (todayDate.getDate() >= new Date(2022, 8, 5).getMonth()) {
            setHarga(55000);
            // setIsClosed(true);
          }
        }
      });
  }, [harga]);

  // React.useEffect(() => {
  //   if (total >= 1490) {
  //     setIsClosed(true);
  //   } else {
  //     setIsClosed(false);
  //     console.log(isClosed)
  //   }
  // }, [total]); // Jangann lupa dihidipun lagi nanti

  React.useEffect(() => {
    const newLocal = pembayaran[0].name;
    return setPayment(newLocal);
  }, []);
  const changeState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPayment(e.target.value);
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

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);

  const formSubmitHandler = async (e: any) => {
    e.preventDefault();
    const total = parseInt(form.jumlah) * harga;
    // const formdata = new FormData();

    if (step === 0) {
      validate1(form);
    } else if (step === 1) {
      setIsLoading(true);
      const formdata = new FormData();

      formdata.append('name', form.nama);
      formdata.append('email', form.email);
      formdata.append('whatsapp', form.noTelepon);
      formdata.append('ticket_total', form.jumlah);
      formdata.append('payment_total', total.toString());
      formdata.append('payment_proof', form.buktiTF);
      formdata.append('payment_no', form.noRek);
      formdata.append('payment_method', form.opsi);

      validate2(form);

      axios({
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        url: 'https://admin.tesdeveloper.me/api/ticketing',
        data: formdata,
      })
        .then(() => {
          toast.success('Pembelian tiket berhasil ');
          return setStep(step + 1);
        })
        .catch(() => {
          toast.error(`Pembelian tiket gagal`);
        })
        .finally(() => {
          setIsLoading(false);
        });

      console.log(form);
      console.log(step);
    } else if (step === 2) {
      router.push('/');
    }
  };

  // const formSubmitHandler2 = async (e: any) => {
  //   e.preventDefault();
  //   // setFormErrors(validate2(form));
  //   const formdata = new FormData();

  //   console.log(form);
  // };

  const conditionalForm = () => {
    switch (step) {
      case 0:
        return (
          <>
            <div className='flex flex-col space-y-2'>
              <div className='font-mediumtext-cblack flex flex-col space-y-2 '>
                <label className='text-xl font-semibold'>Nama Lengkap</label>
                <input
                  id='nama'
                  type='text'
                  className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
                  placeholder='Masukkan nama lengkap kamu'
                  name='name'
                  onChange={changeForm}
                  value={form.nama}
                />
              </div>
              <p className='font-poppins font-semibold text-red-700'>
                {formErrors1.nama}
              </p>
            </div>
            <div className='flex flex-col space-y-2'>
              <div className='font-mediumtext-cblack flex flex-col space-y-2'>
                <label className='text-xl font-semibold'>Email</label>
                <input
                  id='email'
                  type='email'
                  className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
                  placeholder='Masukkan email aktif kamu'
                  name='email'
                  onChange={changeForm}
                  value={form.email}
                />
              </div>
              <p className='font-poppins font-semibold text-red-700'>
                {formErrors1.email}
              </p>
            </div>
            <div className='flex flex-col space-y-2'>
              <div className='font-mediumtext-cblack flex flex-col space-y-2'>
                <label className='text-xl font-semibold'>No telepon</label>
                <input
                  id='noTelepon'
                  type='text'
                  className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
                  placeholder='Masukkan nomor telepon kamu'
                  name='noTelepon'
                  onChange={changeForm}
                  value={form.noTelepon}
                />
              </div>
              <p className='font-poppins font-semibold text-red-700'>
                {formErrors1.noTelepon}
              </p>
            </div>
            {/* <div className='flex flex-col space-y-2'>
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
                  onChange={changeForm}
                  value={form.kode}
                />
              </div>
            </div> */}
            <div className='flex flex-col justify-center space-y-[30px] md:flex-row md:justify-start md:space-y-0 md:space-x-5'>
              <div className='font-mediumtext-cblack flex flex-col space-y-2'>
                <label className='text-xl font-semibold'>Total harga</label>
                <input
                  id='cost'
                  type='text'
                  className='rounded-md !border  border-cgreen bg-transparent p-2 !ring-cgreen'
                  value={`Rp. ${price}`}
                  onChange={(e: any) => {
                    changeQuantity(e);
                    changeForm(e);
                  }}
                />
              </div>
              <div className='flex flex-col space-y-2'>
                <div className='font-mediumtext-cblack flex flex-col space-y-2 md:w-[382px]'>
                  <label className='text-xl font-semibold'>Jumlah tiket</label>
                  <input
                    id='jumlah'
                    type='number'
                    className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
                    placeholder='Masukkan jumlah tiket yang kamu beli'
                    name='quantity'
                    value={quantity}
                    onChange={(e: any) => {
                      if (e.target.value > 8) {
                        e.target.value = 8;
                        toast.error('Jumlah tiket tidak boleh lebih dari 8');
                      }
                      changePrice(e);
                      changeForm(e);
                    }}
                    onKeyUp={(e: any) => {
                      if (e.target.value > 8) {
                        e.target.value = 8;
                      }
                    }}
                    min={0}
                    max={8}
                  />
                </div>
                <p className='font-poppins font-semibold text-red-700'>
                  {formErrors1.jumlah}
                </p>
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className='flex flex-col space-y-2'>
              <div className='mb-8 text-center'>
                <h4 className='text-xl font-medium'>
                  Halo <span className='font-semibold'>{form.nama}</span> segera
                  lakukan pembayaran sebesar{' '}
                  <span className='font-semibold'>
                    Rp. {parseInt(form.jumlah) * harga}
                  </span>
                  sebelum
                </h4>
              </div>
              <TicketTimer expiryTimestamp={time} />
              <div className=' font-mediumtext-cblack flex flex-col space-y-2'>
                <label className='text-xl font-semibold'>
                  Pilih Opsi Pembayaran
                </label>
                <select
                  id='opsi'
                  disabled={!pembayaran.length}
                  onChange={(e: any) => {
                    changeState(e);
                    changeForm(e);
                  }}
                  value={form.opsi}
                  className='rounded-md !border border-[#6B7280] bg-transparent  p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
                >
                  <option />
                  {pembayaran.map((pay) => (
                    <option
                      key={pay.uid}
                      value={pay.name}
                      className='focus:bg-black'
                    >
                      {pay.name}
                    </option>
                  ))}
                </select>
              </div>
              <p className='font-poppins font-semibold text-red-700'>
                {formErrors2.opsi}
              </p>
            </div>

            <div className='flex flex-col space-y-2'>
              <div className='font-mediumtext-cblack flex flex-col space-y-2'>
                <label
                  className='text-xl font-semibold'
                  onChange={(e: any) => {
                    setPayment(e.target.value);
                  }}
                >
                  {payment == 'BRI' ? `Nomor rekening` : `Nomor ${payment}`}
                </label>
                <input
                  min={0}
                  id='noRek'
                  type='text'
                  className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
                  placeholder={
                    payment == 'BRI'
                      ? `Masukkan nomor rekening kamu`
                      : `Masukkan Nomor ${payment} kamu`
                  }
                  name='rekening'
                  onChange={changeForm}
                  value={form.noRek}
                />
              </div>
              <p className='font-poppins font-semibold text-red-700'>
                {formErrors2.noRek}
              </p>
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
                  <img className='mr-4' src='images/upload.svg' alt='' /> Add
                  File{' '}
                </button>
                <input
                  ref={fileRef}
                  onChange={(e: any) => {
                    changeFile(e);
                    handleChange(e);
                  }}
                  // value={form2.buktiTF}
                  multiple={false}
                  id='buktiTF'
                  name='bukti-tf'
                  type='file'
                  className=' hidden rounded-md !border border-[rgb(107,114,128)] bg-transparent autofill:bg-transparent focus:!border-pink-200 focus:!ring-pink-200  focus-visible:!border-pink-200'
                />
              </div>
              <p className='font-poppins font-semibold text-red-700'>
                {formErrors2.buktiTF}
              </p>
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
                {payment == 'BRI' ? `No rekening` : `No ${payment}`} -{' '}
                {payment == 'Gopay'
                  ? pembayaran[0].noRek
                  : payment == 'OVO'
                  ? pembayaran[1].noRek
                  : payment == 'BRI'
                  ? pembayaran[2].noRek
                  : ''}{' '}
              </p>
              <p className='text-xl font-medium text-black'>{`a/n ${
                payment == 'Gopay'
                  ? pembayaran[0].atasNama
                  : payment == 'OVO'
                  ? pembayaran[1].atasNama
                  : payment == 'BRI'
                  ? pembayaran[2].atasNama
                  : ''
              }`}</p>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className='font-poppins align-center flex flex-col justify-center space-y-8 text-center font-medium'>
              <div className='flex justify-center'>
                <img className='w-[200px]' src='svg/ukm_logo.svg' alt='' />
              </div>
              <h4 className='text-xl font-medium text-cblack'>
                Terima kasih <span className='font-semibold'>{form.nama}</span>{' '}
                telah melakukan pembelian tiket, tiket kamu akan segera kami
                proses.
              </h4>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <Toaster position='top-center' />

      <RegisterLayout>
        <Seo templateTitle='Buy Ticket' />
        {isClosed ? (
          <div className='flex flex-col items-center justify-center gap-y-2 py-16 px-10'>
            <h3 className='text-gradient text-center font-primary'>
              Pembelian tiket pre-sale 2 sudah ditutup dikarenakan sold out.
              Bagi Pembeli yang merasa mendapatkan pesan error tiket gagal,
              silahkan cek email terlebih dahulu. Apabila email dari kami sudah
              ada di inbox kamu artinya pembayaran tiket kamu sudah berhasil
              kami rekap. Dan Silahkan mengisi formulir berikut apabila sudah
              melakukan transfer namun belum bisa submit di web.
            </h3>
            <div className='px-14'>
              <h5 className='text-gradient text-center font-primary text-lg'>
                <a
                  className='block py-6 text-blue-600'
                  href='https://intip.in/KonfirmasiTiketUKMEXPO2022'
                >
                  intip.in/KonfirmasiTiketUKMEXPO2022
                </a>
              </h5>

              <h4 className='text-gradient text-center font-primary'>
                Jangan lewatkan informasi terbaru di seluruh sosial media dan
                website UKM Expo ITS 2022.
              </h4>
            </div>
          </div>
        ) : (
          <>
            <h3 className='mb-[90px] mt-[45px] text-center text-[26px] font-bold text-cblack'>
              Form Pendaftaran
            </h3>
            <form
              // onSubmit={formSubmitHandler}
              className='mb-[50px] flex flex-col space-y-[45px] px-[40px] md:px-[78px]'
            >
              {conditionalForm()}

              <div className='flex justify-center space-x-5'>
                {step > 0 && step < 2 && (
                  <button
                    className='w-[13.75rem] rounded-[20px]  border-2 border-cblack py-[10px] text-xl font-semibold text-cblack !transition !duration-300 hover:!scale-105'
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                )}
                <button
                  className={clsx(
                    'w-[13.75rem] rounded-[20px] bg-gradient-to-r from-cgreen to-cgreenb py-[10px] text-xl font-semibold text-cblack !transition !duration-300 hover:!scale-105',
                    isLoading && 'cursor-not-allowed'
                  )}
                  onClick={formSubmitHandler}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      role='status'
                      className='mx-auto h-8 w-8 animate-spin fill-dark text-clightorange'
                      viewBox='0 0 100 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='currentColor'
                      />
                      <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentFill'
                      />
                    </svg>
                  ) : step === 0 ? (
                    'Next'
                  ) : step === 2 ? (
                    'Back to Home'
                  ) : (
                    'Daftar'
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </RegisterLayout>
    </>
  );
}
