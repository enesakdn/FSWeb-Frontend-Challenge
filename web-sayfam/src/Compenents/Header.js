import react from "react";

export const Header = () => {
  return (
    <div className="  Header">
      <div className=" headerSecondDiv ">
        <h3 className=" headerH3">Hi!👋</h3>

        <h2 className=" headerAbout">
          I’m Enes. I’m a full-stack <br /> developer. I can craft solid and{" "}
          <br /> scalable frontend products.
          <br /> Let’s meet!
        </h2>
      </div>

      <img
        className=" headerİMG "
        src="https://media.licdn.com/dms/image/D4D03AQHZP5XgkrK3rQ/profile-displayphoto-shrink_800_800/0/1678635727396?e=1684368000&v=beta&t=NTZfqh43eQ6YSlq5V47G_QCAyZwLu6zONIm-SghF2zQ"
      />
      <p className="headerMetin">
        Currently <span className="text-red-600">Freelancing </span> for{" "}
        <span className="text-red-600">UX, UI, & Web Design</span> Project .{" "}
        <br />
        Invite me to join your team{"  -"}
        <span className="text-red-600">enesakdogan948@gmail.com</span>
      </p>
    </div>
  );
};
