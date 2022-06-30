import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import s from './SubmitOrder.module.scss'

type Inputs = {
  name: string,
  surname:string
  address:string
  phone:string
};


const SubmitOrder = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    mode:"all"
  });

  const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <input className={errors.name ? s.active : ''} placeholder={'Name'} {...register("name", { required: true })} />
        <input className={errors.surname ? s.active : ''} placeholder={'Surname'} {...register("surname", { required: true })} />
        <input className={errors.address ? s.active : ''} placeholder={'Address'} {...register("address", { required: true })} />
        <input  className={errors.phone ? s.active : ''} placeholder={'Phone'} {...register("phone", { required: true })} />
        <input type="submit" />
      </form>
    </>
  );
};

export default SubmitOrder;