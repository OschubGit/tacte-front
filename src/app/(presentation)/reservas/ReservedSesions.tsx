import React from "react";
import { Sessions } from "@/lib/types";
import { hasMoreThanHalf } from "@/lib/functions";
import { CalendarIcon } from "@heroicons/react/24/outline";
import IconBooked from "@/app/(components)/icons/IconBooked";

const ReservedSesions = ({
  reservedSessions,
  setOpenDrawer,
  setSession,
}: {
  reservedSessions: Sessions[];
  setOpenDrawer: (open: boolean) => void;
  setSession: (session: Sessions) => void;
}) => {
  return (
    <>
      {reservedSessions.length > 0 && (
        <>
          <div className="mb-4 flex items-center gap-x-2 justify-start text-tacte-primary-700 p-8 bg-[#ebefdd8c] rounded-lg">
            <IconBooked className="size-6 text-tacte-primary-700" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Mis reservas
            </h2>
          </div>
          {reservedSessions.map((s, index) => (
            <div key={`reserved-${index}`} className="my-8">
              <div className="flex gap-x-2 items-center">
                <h2 className="min-w-0 text-sm/6 font-semibold text-gray-900">
                  <span className="truncate font-semibold text-tacte-primary-700 text-lg">
                    {s.name}
                  </span>
                  <span className="text-gray-500">/</span>
                </h2>
                {s.status === "full" ? (
                  <div className="w-fit rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
                    Sin plazas
                  </div>
                ) : null}
                {s.status === "half" ? (
                  <div
                    className={`w-fit rounded-full px-2 py-1 text-xs font-medium inset-ring ${
                      hasMoreThanHalf(s)
                        ? "bg-orange-50 text-orange-700 inset-ring-orange-700/30"
                        : "bg-green-50 text-green-700 inset-ring-green-700/30"
                    }`}
                  >
                    {hasMoreThanHalf(s) ? "Aún quedan plazas" : "Plazas libres"}
                  </div>
                ) : null}
                {s.status === "free" ? (
                  <div className="w-fit rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-700/30">
                    Plazas libres
                  </div>
                ) : null}
              </div>
              <li className="relative flex gap-x-6 py-3 xl:static">
                <div className="flex-auto">
                  <h3 className="pr-10 font-semibold text-tacte-primary-700 xl:pr-0">
                    Sesión de {s.type}
                  </h3>
                  <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                    <div className="flex items-start gap-x-3">
                      <dt className="mt-0.5">
                        <span className="sr-only">Date</span>
                        <CalendarIcon
                          aria-hidden="true"
                          className="size-5 text-tacte-primary-400"
                        />
                      </dt>
                      <dd>
                        <time dateTime={s.date}>
                          {s.date.toString().split("-").reverse().join("-")}
                          {""} -{" "}
                          {new Date(
                            `1970-01-01T${s.start_time}`
                          ).toLocaleTimeString("es-ES", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })}
                          h
                        </time>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <div className="flex items-center gap-x-2 flex-row">
                    <button
                      onClick={() => {
                        setOpenDrawer(true);
                        setSession(s);
                      }}
                      className="rounded-md px-2.5 py-1.5 text-sm bg-rose-500 text-white hover:bg-rose-400 font-semibold cursor-pointer"
                    >
                      Cancelar reserva
                    </button>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ReservedSesions;
