"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Sessions } from "@/lib/types";
import Drawer from "@/app/(components)/Drawer/Drawer";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { useAuthStore } from "@/stores/authStore";
import AvailableSesions from "./AvailableSesions";
import AuthenticatedSessions from "./AuthenticatedSessions";
import Link from "next/link";
import { TabNames } from "@/lib/enums";
import ComboboxSelect from "@/app/(components)/ComboBox/Combobox";

export default function ReservasPage() {
  const defaultClassNames = getDefaultClassNames();
  const [sessions, setSessions] = useState<Sessions[]>([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [session, setSession] = useState<Sessions | null>(null);
  const [selected, setSelected] = useState<Date>();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [activeTab, setActiveTab] = useState<string>(TabNames.ALL);

  const fetchPublicSessions = async (): Promise<void> => {
    const sessions = await api.publicSessions({
      datefrom: selected?.toISOString().split("T")[0],
      dateto: selected?.toISOString().split("T")[0],
    });
    setSessions(sessions.sessions);
  };

  const fetchSessions = async (type?: string): Promise<void> => {
    const sessions = await api.getSessions({
      type: type ?? null,
      datefrom:
        selected?.toISOString().split("T")[0] ??
        new Date().toISOString().split("T")[0],
      dateto: selected?.toISOString().split("T")[0],
      user_id: user?.id ? String(user.id) : undefined,
    });
    setSessions(sessions.sessions);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      fetchPublicSessions();
    } else {
      fetchSessions();
    }
  }, [isAuthenticated, selected]);

  const selectService = (service: string) => {
    fetchSessions(service);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="bg-white pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base/7 font-semibold text-tacte-primary-600">
            Es rápido y sencillo
          </p>
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Reserva tu cita ahora
          </h2>

          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {isAuthenticated
              ? "Selecciona una fecha para ver las sesiones disponibles. Puedes reservar al momento y cancelar si lo necesitas más tarde."
              : "Debes estar registrado para reservar. Inicia sesión y vuelve a esta página para hacer tu reserva."}
          </p>
          {!isAuthenticated && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-y-5 gap-x-5 mt-5">
              <Link href="/login?redirect=/reservas">
                <button className="w-full sm:w-auto rounded-md border border-tacte-primary-500 bg-tacte-primary-50 px-3.5 py-2.5 text-sm font-semibold text-tacte-primary-500 shadow-xs hover:bg-tacte-primary-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
                  Iniciar sesión
                </button>
              </Link>
              <Link href="/register">
                <button className="w-full sm:w-auto border border-tacte-primary-500 rounded-md bg-tacte-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-tacte-primary-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
                  Registrarse aquí
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start md:flex-row gap-x-18 gap-y-5 w-full pb-12 relative">
        <DayPicker
          animate
          selected={selected}
          onSelect={(date) => {
            setSelected(date);
          }}
          defaultMonth={new Date(2025, 8)}
          startMonth={new Date()}
          modifiers={{
            booked: sessions
              ?.filter(
                (session) =>
                  session.cancelled === false && session.reserved_by_user
              )
              .map((session) => new Date(session.date)),
          }}
          modifiersClassNames={{
            booked: "bg-green-100 text-red-600 rounded-full",
          }}
          footer={<CalendarFooter selected={selected} />}
          captionLayout="label"
          mode="single"
          navLayout="after"
          numerals="latn"
          showOutsideDays
          timeZone="Europe/Madrid"
          weekStartsOn={1}
          disabled={{
            before: new Date(),
            after: new Date(new Date().setDate(new Date().getDate() + 21)),
          }}
          classNames={{
            disabled: `text-red-500`, // Add a border to today's date
            today: ``, // Add a border to today's date
            day: `text-tacte-primary-900`, // Add a border to today's date
            selected: `bg-tacte-primary-500 border-tacte-primary-500 text-white font-semibold rounded-full`, // Highlight the selected day
            root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
            chevron: `${defaultClassNames.chevron} fill-tacte-primary-500`, // Change the color of the chevron
          }}
        />
        <ol className="mt-4 divide-y divide-gray-100 text-sm/6 lg:col-span-7 xl:col-span-8 w-full">
          {isAuthenticated ? (
            <>
              <ComboboxSelect onSelect={selectService} />
              <AuthenticatedSessions
                sessions={sessions}
                setOpenDrawer={setOpenDrawer}
                setSession={setSession}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </>
          ) : (
            <AvailableSesions
              availableSessions={sessions}
              setOpenDrawer={setOpenDrawer}
              setSession={setSession}
            />
          )}
        </ol>
      </div>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        session={session}
        onReservationChange={fetchSessions}
      />
    </div>
  );
}

const CalendarFooter = ({ selected }: { selected: Date | undefined }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    isAuthenticated && (
      <div>
        {selected ? (
          <div className="pt-4 pb-1 text-left text-tacte-primary-600 text-xs">
            <p>
              Ver sesiones disponibles para el: {selected?.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <div className="pt-4 pb-1 text-left text-tacte-primary-600 text-xs">
            <p>Selecciona una fecha para ver las sesiones disponibles.</p>
          </div>
        )}

        <div className="pt-4 pb-1 text-left text-tacte-primary-600 text-xs">
          <p>
            Los dias marcados en verde indican los dias que tienes reservas.
          </p>
        </div>
      </div>
    )
  );
};
