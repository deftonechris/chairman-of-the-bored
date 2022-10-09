import React, { useState } from "react";
import { HiChevronDoubleDown, HiXCircle } from "react-icons/hi";
import { FcBusinessman } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onClick = () => setActive(!active);

  const modalHandler = () => {
    setShowModal(null);
  };

  const ModalSwitchHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="content-start flex flex-col h-[80px]">
      {showModal &&
        (isLogin ? (
          <LoginModal
            onShowModal={modalHandler}
            SwitchModal={ModalSwitchHandler}
          />
        ) : (
          <RegisterModal
            onShowModal={modalHandler}
            SwitchModal={ModalSwitchHandler}
          />
        ))}
      <div className="fixed w-full h-[80px] flex justify-between items-center px-6 bg-yellow-300 text-white font-bold z-10">
        <div className="flex text-2xl text-rose-600">
          Chairman of the Bored
          <span>
            <FcBusinessman size={40} className="inline-flex ml-4" />
          </span>
        </div>
        <ul className="hidden  md:flex md:space-x-4 text-rose-600">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowModal(true)}>Login</NavLink>
          </li>
          <li>
            <NavLink>Signup</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
        </ul>

        <div onClick={onClick} className="md:hidden text-rose-600">
          {!active ? <HiChevronDoubleDown /> : <HiXCircle />}
        </div>

        <div className={
            !active
              ? "hidden"
              : "w-full h-screen main flex flex-col md:hidden justify-center items-center bg-girl bg-cover bg-no-repeat bg-center md:bg-none text-black absolute inset-0"
          }>
        <ul>
          <li className="py-6 text-4xl">
            <NavLink onClick={onClick}>Home</NavLink>
          </li>
          <li className="py-6 text-4xl">
            <NavLink onClick={() => setShowModal(true)}>Login</NavLink>
          </li>
          <li className="py-6 text-4xl">
            <NavLink onClick={onClick}>Signup</NavLink>
          </li>
          <li className="py-6 text-4xl">
            <NavLink onClick={onClick}>About</NavLink>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
