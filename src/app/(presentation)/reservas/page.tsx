"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Sessions } from "@/lib/types";
import Drawer from "@/app/(components)/Drawer/Drawer";
import { hasMoreThanHalf } from "@/lib/functions";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { useAuthStore } from "@/stores/authStore";
import ReservedSesions from "./ReservedSesions";
import AvailableSesions from "./AvailableSesions";
import CanceledSesions from "./CanceledSesions";

export default function ReservasPage() {
    const defaultClassNames = getDefaultClassNames();
    const [sessions, setSessions] = useState<Sessions[]>([]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [session, setSession] = useState<Sessions | null>(null);
    const [selected, setSelected] = useState<Date>();
    const user = useAuthStore((state) => state.user);
    const fetchSessions = async (): Promise<void> => {
        const sessions = await api.getSessions({
            datefrom: selected?.toISOString().split("T")[0],
            dateto: selected?.toISOString().split("T")[0],
            user_id: user?.id ? String(user.id) : undefined,
        });
        setSessions(sessions.sessions);
    };

    useEffect(() => {
        if (user) {
            fetchSessions();
        }
    }, [selected, user]);

    return (
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <div className="bg-white pb-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-base/7 font-semibold text-indigo-600">
                        Es rápido y sencillo
                    </p>
                    <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        Reserva tu cita ahora
                    </h2>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Selecciona una fecha para ver las sesiones disponibles.
                        Puedes reservar al momento y cancelar si lo necesitas
                        más tarde.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start md:flex-row gap-x-18 gap-y-8 w-full pb-12">
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
                            .filter(
                                (session) =>
                                    session.cancelled === false &&
                                    session.reserved_by_user
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
                        after: new Date(
                            new Date().setDate(new Date().getDate() + 21)
                        ),
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
                    {sessions.length > 0 ? (
                        (() => {
                            const sortedSessions = sessions.sort((a, b) => {
                                // Primero ordenar por reserved_by_user
                                if (a.reserved_by_user && !b.reserved_by_user)
                                    return -1;
                                if (!a.reserved_by_user && b.reserved_by_user)
                                    return 1;
                                // Si tienen el mismo estado de reserva, ordenar por fecha
                                return (
                                    new Date(a.date).getTime() -
                                    new Date(b.date).getTime()
                                );
                            });

                            const reservedSessions = sortedSessions.filter(
                                (s) =>
                                    s.reserved_by_user && s.cancelled === false
                            );
                            const availableSessions = sortedSessions.filter(
                                (s) =>
                                    !s.reserved_by_user && s.cancelled === false
                            );

                            const cancelledSessions = sortedSessions.filter(
                                (s) => s.cancelled
                            );

                            return (
                                <>
                                    <ReservedSesions
                                        reservedSessions={reservedSessions}
                                        setOpenDrawer={setOpenDrawer}
                                        setSession={setSession}
                                    />

                                    <AvailableSesions
                                        availableSessions={availableSessions}
                                        setOpenDrawer={setOpenDrawer}
                                        setSession={setSession}
                                    />

                                    <CanceledSesions
                                        cancelledSessions={cancelledSessions}
                                    />
                                </>
                            );
                        })()
                    ) : (
                        <div className="flex justify-center items-center h-full">
                            <p className="text-tacte-primary-600 text-lg">
                                No hay sesiones disponibles para esta fecha.
                            </p>
                        </div>
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
    return (
        <div>
            {selected ? (
                <div className="pt-4 pb-1 text-left text-tacte-primary-600 text-xs">
                    <p>
                        Ver sesiones disponibles para el:{" "}
                        {selected?.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <div className="pt-4 pb-1 text-left text-tacte-primary-600 text-xs">
                    <p>
                        Selecciona una fecha para ver las sesiones disponibles.
                    </p>
                </div>
            )}
            <div className="pt-4 pb-1 text-left text-tacte-primary-600 text-xs">
                <p>
                    Los dias marcados en verde indican los dias que tienes
                    reservas.
                </p>
            </div>
        </div>
    );
};
