import React from "react";
import { Sessions } from "@/lib/types";
import { CalendarIcon } from "@heroicons/react/24/outline";
import IconCancelBox from "@/app/(components)/icons/IconCancelBox";

const CanceledSesions = ({
  cancelledSessions,
}: {
  cancelledSessions: Sessions[];
}) => {
  return (
    <>
      {cancelledSessions.length > 0 && (
        <>
          <div className="mb-4 mt-8 flex items-center gap-x-2 justify-start text-tacte-primary-700 p-8 bg-[#ebefdd8c] rounded-lg">
            <IconCancelBox className="size-6 text-tacte-primary-700" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Sesiones canceladas
            </h2>
          </div>
          {cancelledSessions.map((s, index) => (
            <div key={`available-${index}`} className="my-8">
              <div className="flex gap-x-2 items-center">
                <h2 className="min-w-0 text-sm/6 font-semibold text-gray-900">
                  <span className="truncate font-semibold text-tacte-primary-700 text-lg">
                    {s.name}
                  </span>
                  <span className="text-gray-500">/</span>
                </h2>
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
              </li>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default CanceledSesions;
