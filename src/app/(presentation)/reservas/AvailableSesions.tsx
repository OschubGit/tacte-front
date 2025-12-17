import React from "react";
import { Sessions } from "@/lib/types";
import { hasMoreThanHalf } from "@/lib/functions";
import { CalendarIcon } from "@heroicons/react/24/outline";
import IconList from "@/app/(components)/icons/IconList";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { translateType } from "@/lib/functions";
import { toast } from "react-toastify";
import { Services } from "@/lib/enums";

const AvailableSesions = ({
  availableSessions,
  setOpenDrawer,
  setSession,
}: {
  availableSessions: Sessions[];
  setOpenDrawer: (open: boolean) => void;
  setSession: (session: Sessions) => void;
}) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  return (
    <>
      {availableSessions?.length > 0 && (
        <>
          <div className="mb-4 flex items-center gap-x-2 justify-start text-tacte-primary-700 p-8 bg-[#ebefdd8c] rounded-lg">
            <IconList className="size-6 text-tacte-primary-700" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Sesiones disponibles
            </h2>
          </div>
          {availableSessions.map((s, index) => (
            <div key={`available-${index}`} className="my-8">
              <div className="flex gap-x-2 items-center">
                <h2 className="min-w-0 text-sm/6 font-semibold text-gray-900">
                  <span className="truncate font-semibold text-tacte-primary-700 text-lg">
                    {s.name}
                  </span>
                  <span className="text-gray-500">/</span>
                </h2>
                {s.status === "full" ? (
                  <div className="w-fit rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-700/30">
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
                    Sesión de {translateType(s.type)}
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
                      disabled={s.status === "full"}
                      onClick={() => {
                        if (!isAuthenticated) {
                          router.push("/login?redirect=/reservas");
                        } else {
                          if (
                            user?.can_reserve === false &&
                            s.type === Services.YOGA
                          ) {
                            toast.info(
                              "Todavía no tienes una suscripción activa."
                            );
                          } else {
                            setOpenDrawer(true);
                            setSession(s);
                          }
                        }
                      }}
                      className="rounded-md px-2.5 py-1.5 text-sm bg-tacte-primary-500 text-white hover:bg-tacte-primary-400 font-semibold cursor-pointer"
                    >
                      Reservar
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

export default AvailableSesions;
