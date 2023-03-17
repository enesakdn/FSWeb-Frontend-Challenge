import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

function GeriDonus() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [data, setData] = useState({
    isim: "",
    soyisim: "",
    message: "",
  });

  const notify = () =>
    toast(`Teşekkürler ${data.isim}. Geri bildirimin alındı.`);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (data) => {
    console.log(data);
    notify();
    history.push("/");
  };

  return (
    <div>
      <form
        className="bg-[#F4F4F4] p-10"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4">
            <label htmlFor="isim" className="w-1/3 text-right">
              Ad:
            </label>
            <input
              type="text"
              name="isim"
              {...register("isim", { required: true })}
              value={data.isim}
              onChange={(e) => handleOnChange(e)}
              className="flex-1 p-2 border border-gray-400 rounded-md"
            />
            {errors.isim && (
              <span className="text-red-500">Bu alan boş bırakılamaz</span>
            )}
          </div>
          <div className="flex flex-row space-x-4">
            <label htmlFor="soyisim" className="w-1/3 text-right">
              Soyad:
            </label>
            <input
              type="text"
              name="soyisim"
              {...register("soyisim", { required: true })}
              value={data.soyisim}
              onChange={(e) => handleOnChange(e)}
              className="flex-1 p-2 border border-gray-400 rounded-md"
            />
            {errors.soyisim && (
              <span className="text-red-500">Bu alan boş bırakılamaz</span>
            )}
          </div>
          <div className="flex flex-row space-x-4">
            <label htmlFor="message" className="w-1/3 text-right">
              Geri Bildiriminiz:
            </label>
            <textarea
              name="message"
              {...register("message", { required: true })}
              value={data.message}
              onChange={(e) => handleOnChange(e)}
              className="flex-1 p-2 border border-gray-400 rounded-md"
            />
            {errors.message && (
              <span className="text-red-500">Bu alan boş bırakılamaz</span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-[#60A5FA] rounded-md"
            >
              Gönder
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default GeriDonus;
