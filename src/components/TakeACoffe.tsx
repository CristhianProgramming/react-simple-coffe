import { useEffect, useState } from "react";
import img1 from "../assets/coffes/1.png";
import Button from "./Button";

function TakeACoffe() {
  const coffes: any[] = [
    {
      id: 1,
      img: img1,
      nombre: "EXPRESO",
      cantidad: 0,
    },
    {
      id: 2,
      img: img1,
      nombre: "BLACK",
      cantidad: 0,
    },
    {
      id: 3,
      img: img1,
      nombre: "WITH MILK",
      cantidad: 0,
    },
    {
      id: 4,
      img: img1,
      nombre: "CHARGED",
      cantidad: 0,
    },
    {
      id: 5,
      img: img1,
      nombre: "PLUS",
      cantidad: 0,
    },
    {
      id: 6,
      img: img1,
      nombre: "LATE",
      cantidad: 0,
    },
  ];

  const [coffe, setCoffe] = useState([]);

  useEffect(() => setCoffe(coffes), []);

  const addCoffe = (id: number) => {
    setCoffe((p) => {
      p[p.findIndex((p) => p.id === id)].cantidad += 0.5;
      return [...p];
    });
  };

  const restartCoffe = () => {
    setCoffe(coffes);
  };


  return (
    <div className="grid grid-cols-2 ">
      <div className="pt-20 pb-20 grid grid-cols-3">
        {coffes.map((p) => {
          return (
            <div
              className="text-center cursor-pointer"
              onClick={() => addCoffe(p.id)}
              key={p.id}
            >
              <img src={p.img} className="w-2/3 m-auto" />
              <h4 style={{ color: "var(--secondary-color)" }}>{p.nombre}</h4>
            </div>
          );
        })}
      </div>
      <div className="text-center p-3">
        <h1 className="p-3 title" style={{ color: "var(--secondary-color)" }}>
          YOUR ORDEN
        </h1>
        <p>
          {coffe.map((p) => {
            if (p.cantidad == 0) {
              return;
            }
            return (
              <div className=" grid grid-cols-4 m-auto grid-rows-1">
                <img src={p.img} className="w-14 ml-auto" />
                <h4
                  className="p-5 mr-auto"
                  style={{ color: "var(--secondary-color)" }}
                >
                  {p.nombre} X {p.cantidad}
                </h4>
               
              </div>
            );
          })}
        </p>
      
        <Button text="DRINK" color="var(--secondary-color)"  />
      <a onClick={restartCoffe}>
        <Button text="CANCELAR" color="var(--thirty-color)" />
        </a>
      </div>
    </div>
  );
}

export default TakeACoffe;
