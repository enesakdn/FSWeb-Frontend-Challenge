import react from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GeriDonus() {
  const history = useHistory();
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Ad:", data.isim);
    console.log("Soyad:", data.soyisim);
    console.log("Message:", data.message);
    notify();
    history.push("/");
  };

  return (
    <div>
      <form className=" bg-[#F4F4F4]" onSubmit={(e) => handleOnSubmit(e)}>
        <label className="p-6 ml-4 inputs-container ">
          Ad:
          <input
            type="textarea"
            name="isim"
            value={data.isim}
            onChange={(e) => handleOnChange(e)}
          />
          Soyad:
          <input
            type="text"
            name="soyisim"
            value={data.soyisim}
            onChange={(e) => handleOnChange(e)}
          />
          Geri Bildirim:
          <input
            type="text"
            name="message"
            value={data.message}
            onChange={(e) => handleOnChange(e)}
          />
        </label>
        <button>Gönder</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default GeriDonus;
