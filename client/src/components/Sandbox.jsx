import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Sandbox() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: 'defualt name',
      age: 20,
    },
  });
  console.log(watch());

  //   useEffect(() => {}, []);

  return (
    <div>
      <form
        className="flex flex-col gap-2 max-w-[250px] mx-auto mt-10"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        {errors.name && <p>{errors.name.message}</p>}
        <input
          className="border-red-500 border-2"
          {...register('name', {
            required: 'Name is required',
          })}
          type="text"
        />
        {errors.age && <p>{errors.age.message}</p>}
        <input
          className="border-red-500 border-2"
          {...register('age', {
            min: { value: 18, message: 'asdasdasdasasd' },
            max: { value: 58, message: 'dsadsadsadsa' },
            required: 'required age',
          })}
          type="number"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
