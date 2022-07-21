import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import RegisterLayout from '@/components/register/RegisterLayout';
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

    name: 'Shopee',
    noRek: '088804821572',
    atasNama: 'maitsadzr',
  },
  {
    uid: 3,

    name: 'BRI',
    noRek: '365601027280538',
    atasNama: 'maitsa adzro fania',
  },
];

export default function Register() {
  type errorLists = {
    nama: string,
    email: string,
    noTelepon: string,
    opsi: string,
    noRek: string,
    kode: string,
    jumlah: string,
    cost: string,
    buktiTF: string,
  }
  const router = useRouter();
  const [harga, setHarga] = useState(30000);
  const [isClosed] = useState(true);
  const [todayDate] = useState(new Date());

  const [formErrors, setFormErrors] = useState({} as errorLists);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null);
  const initialFileState: IFileState = {
    file: null,
    src: '',
    dimension: { width: 0, height: 0 },
  };
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
  };

  const changeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setForm((prevState) => ({
        ...prevState,
        [e.target.id]: file,
      }));
    }
    // if(e.currentTarget.files)
    // console.log(e.currentTarget.files[0]);
  };

  const formSubmitHandler = async (e: any) => {
    e.preventDefault();
    setFormErrors(validate(form));
    const total = parseInt(form.jumlah) * harga;

    const formdata = new FormData();
    formdata.append('name', form.nama);
    formdata.append('email', form.email);
    formdata.append('whatsapp', form.noTelepon);
    formdata.append('payment_proof', form.buktiTF);
    formdata.append('payment_no', form.noRek);
    formdata.append('payment_method', form.opsi);
    formdata.append('ticket_total', form.jumlah);
    formdata.append('payment_total', total.toString());

    axios({
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' },
      url: 'https://server.tesdeveloper.me/v1/ticketing',
      data: formdata,
    })
      .then(() => {
        toast.success('Pembelian tiket berhasil ')
        router.push('/')
      })
      .catch((err) => {
        toast.error(`error: ${err} Pembelian gagal`);
      });
  };

  React.useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(form);
    }
  }, [formErrors]);
  const validate = (values:any) => {
    type Errors = {
      nama: string,
      email: string,
      noTelepon: string,
      opsi: string,
      noRek: string,
      kode: string,
      jumlah: string,
      cost: string,
      buktiTF: string,
    };

    const errors = {} as Errors;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nama) {
      errors.nama = "Nama Lengkap wajib diisi ya!";
      console.log("blah blah")
    }
    if (!values.email) {
      errors.email = "Email wajib diisi ya!";
    } else if (!regex.test(values.email)) {
      errors.email = "Format email tidak valid";
    }
    if (!values.noTelepon) {
      errors.noTelepon = "No Telepon wajib diisi ya!";
    }
    if (!values.opsi) {
      errors.opsi = "Opsi Pembayaran wajib diisi ya!";
    }
    if (!values.noRek) {
      errors.noRek = "Nomor yang kamu gunakan untuk transaksi wajib diisi ya!";
    }
    if (!values.jumlah) {
      errors.jumlah = "Jumlah tiket yang ingin kamu beli wajib diisi ya!";
    } else if (values.jumlah <= 0) {
      errors.jumlah = "Jumlah tiket yang dibeli minimal 1 ya!"
    }
    if (!values.buktiTF) {
      errors.buktiTF = "Bukti Transfer kamu wajib diisi ya!";
    }
    return errors;
  };

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
    fetch("https://server.tesdeveloper.me/v1/ticketingsss").then(res => res.json()).then(data => {
        let total = 0;
        data.data.forEach((ticket: any) => {
          total += parseInt(ticket.ticket_total);
        });
        setTotal(total);
        if (
          total === 300 ||
          todayDate.getDate() >= new Date(2022, 7, 22).getDate()
        ) {
          setHarga(40000);
          console.log(harga);
        }
      });
  }, []);

  React.useEffect(() => {
    const newLocal = pembayaran[0].name;
    return setPayment(newLocal);
  }, []);
  const changeState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPayment(e.target.value);
    // setNoRekening(pembayaran[e.target.value].noRek);
    // setNama(pembayaran[e.target.value].atasNama);
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
     <Toaster  position="bottom-center"/>
     
    <RegisterLayout>
    <h3 className='mb-[90px] mt-[45px] text-center text-[26px] font-bold text-cblack'>
      Form Pendaftaran
    </h3>
    <form
      onSubmit={formSubmitHandler}
      className='mb-[50px] flex flex-col space-y-[45px] md:px-[78px] px-[40px]'
    >
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
      <p className='font-poppins text-red-700 font-semibold'>{formErrors.nama}</p>
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
      <p className='font-poppins text-red-700 font-semibold'>{formErrors.email}</p>
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
      <p className='font-poppins text-red-700 font-semibold'>{formErrors.noTelepon}</p>
      </div>
      <div className='flex flex-col space-y-2'>
      <div className='font-mediumtext-cblack flex flex-col space-y-2'>
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
      <p className='font-poppins text-red-700 font-semibold'>{formErrors.opsi}</p>
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
      <p className='font-poppins text-red-700 font-semibold'>{formErrors.noRek}</p>
      </div>
      <div className='flex flex-col space-y-2'>
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
      </div>
      <div className='flex flex-col justify-center space-y-[30px] md:flex-row md:justify-start md:space-y-0 md:space-x-5'>
        <div className='font-mediumtext-cblack flex flex-col space-y-2'>
          <label className='text-xl font-semibold'>Total harga</label>
          <input
            type='text'
            className='rounded-md !border  border-cgreen bg-transparent p-2 !ring-cgreen'
            value={`Rp. ${price}`}
            onChange={(e: any) => {
              changeQuantity(e);
              changeForm(e);
            }}
            disabled
          />
          <input
            id='cost'
            type='number'
            className='rounded-md !border  border-cgreen bg-transparent p-2 !ring-cgreen'
            name='harga'
            value={price}
            onChange={(e: any) => {
              changeQuantity(e);
              changeForm(e);
            }}
        
            hidden
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
              changePrice(e);
              changeForm(e);
            }}
            min={0}
        
          />
        </div>
        <p className='font-poppins text-red-700 font-semibold'>{formErrors.jumlah}</p>
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
            onChange={(e: any) => {
              changeFile(e);
              handleChange(e);
            }}
            // value={form.buktiTF}
            multiple={false}
            id='buktiTF'
            name='bukti-tf'
            type='file'
            className=' hidden rounded-md !border border-[rgb(107,114,128)] bg-transparent autofill:bg-transparent focus:!border-pink-200 focus:!ring-pink-200  focus-visible:!border-pink-200'
        
          />
        </div>
        <p className='font-poppins text-red-700 font-semibold'>{formErrors.buktiTF}</p>
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
                    : payment == 'Shopee'
                    ? pembayaran[2].noRek
                    : pembayaran[3].noRek}{' '}
                </p>
                <p className='text-xl font-medium text-black'>{`a/n ${
                  payment == 'Gopay'
                    ? pembayaran[0].atasNama
                    : payment == 'OVO'
                    ? pembayaran[1].atasNama
                    : payment == 'Shopee'
                    ? pembayaran[2].atasNama
                    : pembayaran[3].atasNama
                }`}</p>
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
