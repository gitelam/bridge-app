"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex-1 h-full justify-center items-center">
      <div className="h-full  w-1/4 border-gray-800 border-r-[0.01rem] min-h-screen flex flex-1 items-center justify-center">
        <div className="flex flex-col  gap-4">
          <div className="header flex gap-2">
            <div className="border p-2 rounded-md  border-gray-500  shadow-sm shadow-purple-500">
              <div className=" font-mono font-light font-sm">
                Patrón <div className="font-extralight text-xs">bridge</div>
              </div>
            </div>
            <div className="border p-2 rounded-md  border-gray-500  shadow-sm shadow-purple-500">
              <div className=" font-mono font-light font-sm">
                Samuel Hiram Castro Martinez{" "}
                <div className="font-extralight text-xs">
                  {" "}
                  Patrones de diseño - 2024
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-md  border-gray-500  shadow-2xl shadow-green-500">
            <label className="font-mono font-light font-sm">
              Seleccione un patrón
            </label>
            <select className="bg-black p-2 border-gray-600 rounded-md border-[0.01rem]">
              <option value="0">Seleccione una opción</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
