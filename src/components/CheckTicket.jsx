/* eslint-disable no-useless-escape */
import axios from 'axios';
import React, { useState } from 'react';

import RegisterLayout from '@/components/register/RegisterLayout';

export default function CheckTicket() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState({ booking_status: '' });

  // useEffect(() => {
  //   requestEmail();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    requestEmail();
  };

  const requestEmail = () => {
    const raw = { email: email };
    axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: 'https://server.tesdeveloper.me/v1/ticketing/getTicket',
      data: raw,
    }).then((res) => {
      setData(res.data.data);
      setStatus(
        data.booking_status
          ? 'Sudah Terverifikasi silahkan cek email anda'
          : 'Your ticket is on the way '
      );
    });
  };

  return (
    <>
      <RegisterLayout>
        <form
          action=''
          onSubmit={formSubmitHandler}
          className='mb-[50px] flex flex-col space-y-[45px] px-[78px]'
        >
          <div className='font-mediumtext-cblack flex flex-col space-y-2'>
            <label className='text-xl font-semibold'>Email</label>
            <input
              id='email'
              type='email'
              className='rounded-md !border border-[#6B7280] bg-transparent p-2 autofill:bg-transparent focus:!border-cgreen focus:!ring-cgreen  focus-visible:!border-cgreen'
              placeholder='Masukkan email aktif kamu'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-center'>
            <button className='w-[13.75rem] rounded-[20px] bg-gradient-to-r from-cgreen to-cgreenb py-[10px] text-xl font-semibold text-cblack'>
              Check
            </button>
          </div>
        </form>

        <div className='text-center'>{status}</div>
      </RegisterLayout>
    </>
  );
}
