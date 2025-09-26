"use client";

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    TransitionChild,
} from "@headlessui/react";
import {
    CheckIcon,
    InformationCircleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Sessions } from "@/lib/types";
import { hasMoreThanHalf } from "@/lib/functions";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import ConfirmationModal from "@/app/(presentation)/reservas/ConfirmationModal";
import { Bounce, toast } from "react-toastify";

export default function Drawer({
    open,
    onClose,
    session,
    onReservationChange,
}: {
    open: boolean;
    onClose: () => void;
    session: Sessions | null;
    onReservationChange: () => void;
}) {
    const user = useAuthStore((state) => state.user);
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
    const [openCancelationModal, setOpenCancelationModal] = useState(false);

    const handleReserve = async () => {
        await api
            .reserveSession(
                String(user?.id),
                String(session?.id),
                String(session?.type)
            )
            .then(() => {
                toast.success("Sesión reservada correctamente", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                onReservationChange(); // Actualizar la lista de sesiones
                onClose(); // Cerrar el drawer
                setOpenConfirmationModal(false); // Cerrar el modal de confirmación
            })
            .catch((error) => {
                toast.error("Error al reservar sesión...", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                console.error("Error al reservar sesión...", error);
            });
    };

    const handleCancel = async () => {
        // Aquí deberías implementar la lógica para cancelar la reserva
        // const response = await api.cancelSession(String(session?.id));
        await api
            .cancelReservation(
                String(user?.id),
                String(session?.id),
                String(session?.type)
            )
            .then(() => {
                toast.success("Reserva cancelada correctamente", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                onReservationChange(); // Actualizar la lista de sesiones
                onClose(); // Cerrar el drawer
                setOpenCancelationModal(false); // Cerrar el modal de cancelación
            })
            .catch((error) => {
                toast.error("Error al cancelar reserva...", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                console.error("Error al cancelar reserva...", error);
            });
    };

    return (
        <div>
            <Dialog open={open} onClose={onClose} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-tacte-primary-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            {session ? (
                                <DialogPanel
                                    transition
                                    className="pointer-events-auto relative w-96 transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                                >
                                    <TransitionChild>
                                        <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                onClick={() => onClose()}
                                                className="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">
                                                    Close panel
                                                </span>
                                                <XMarkIcon
                                                    aria-hidden="true"
                                                    className="size-6"
                                                />
                                            </button>
                                        </div>
                                    </TransitionChild>
                                    <div className="relative h-full overflow-y-auto bg-white p-8">
                                        <div className="space-y-6 pb-16">
                                            <div>
                                                {/* <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                                                className="block aspect-10/7 w-full rounded-lg bg-gray-100 object-cover outline -outline-offset-1 outline-black/5"
                                            /> */}
                                                <div className="mt-4 flex items-start justify-between">
                                                    <div>
                                                        <h2 className="text-base font-semibold text-gray-900 mb-3">
                                                            <span className="text-tacte-primary-800 text-lg">
                                                                {session.name}
                                                            </span>
                                                        </h2>
                                                        {session.status ===
                                                        "full" ? (
                                                            <div className="w-fit rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
                                                                Sin plazas
                                                            </div>
                                                        ) : null}
                                                        {session.status ===
                                                        "half" ? (
                                                            <div
                                                                className={`w-fit rounded-full px-2 py-1 text-xs font-medium inset-ring ${
                                                                    hasMoreThanHalf(
                                                                        session
                                                                    )
                                                                        ? "bg-orange-50 text-orange-700 inset-ring-orange-700/30"
                                                                        : "bg-green-50 text-green-700 inset-ring-green-700/30"
                                                                }`}
                                                            >
                                                                {hasMoreThanHalf(
                                                                    session
                                                                )
                                                                    ? "Aún quedan plazas"
                                                                    : "Plazas libres"}
                                                            </div>
                                                        ) : null}
                                                        {session.status ===
                                                        "free" ? (
                                                            <div className="w-fit rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-700/30">
                                                                Plazas libres
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="relative ml-4 flex size-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-indigo-600"
                                                    >
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">
                                                            Favorite
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-tacte-primary-900">
                                                    Información
                                                </h3>
                                                <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                                                    <div className="flex justify-between py-3 text-sm font-medium">
                                                        <dt className="text-gray-500">
                                                            Fecha
                                                        </dt>
                                                        <dd className="text-tacte-primary-900">
                                                            {session.date
                                                                .toString()
                                                                .split("-")
                                                                .reverse()
                                                                .join("-")}
                                                        </dd>
                                                    </div>
                                                    <div className="flex justify-between py-3 text-sm font-medium">
                                                        <dt className="text-gray-500">
                                                            Hora de inicio
                                                        </dt>
                                                        <dd className="text-tacte-primary-900">
                                                            {new Date(
                                                                `1970-01-01T${session.start_time}`
                                                            ).toLocaleTimeString(
                                                                "es-ES",
                                                                {
                                                                    hour: "2-digit",
                                                                    minute: "2-digit",
                                                                    hour12: false, // si no quieres AM/PM
                                                                }
                                                            )}
                                                            h
                                                        </dd>
                                                    </div>
                                                    <div className="flex justify-between py-3 text-sm font-medium">
                                                        <dt className="text-gray-500">
                                                            Hora de fin
                                                        </dt>
                                                        <dd className="text-tacte-primary-900">
                                                            {new Date(
                                                                `1970-01-01T${session.end_time}`
                                                            ).toLocaleTimeString(
                                                                "es-ES",
                                                                {
                                                                    hour: "2-digit",
                                                                    minute: "2-digit",
                                                                    hour12: false, // si no quieres AM/PM
                                                                }
                                                            )}
                                                            h
                                                        </dd>
                                                    </div>
                                                    <div className="flex justify-between py-3 text-sm font-medium">
                                                        <dt className="text-gray-500">
                                                            Aforo máximo
                                                        </dt>
                                                        <dd className="text-tacte-primary-900">
                                                            {
                                                                session.max_allowed_reserves
                                                            }
                                                        </dd>
                                                    </div>
                                                    <div className="flex justify-between py-3 text-sm font-medium">
                                                        <dt className="text-gray-500">
                                                            Aforo disponible
                                                        </dt>
                                                        <dd className="text-tacte-primary-900">
                                                            {session.max_allowed_reserves -
                                                                session.current_reserves}
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-900">
                                                    Descripción de la sesión
                                                </h3>
                                                <div className="mt-2 flex items-center justify-between">
                                                    {session.description ? (
                                                        <p className="text-sm text-gray-500 italic">
                                                            {
                                                                session.description
                                                            }
                                                        </p>
                                                    ) : (
                                                        <p className="text-sm text-gray-500 italic">
                                                            Sin descripción
                                                            disponible
                                                        </p>
                                                    )}
                                                    <button
                                                        type="button"
                                                        className="relative -mr-2 flex size-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-indigo-600"
                                                    >
                                                        <span className="absolute -inset-1.5" />
                                                    </button>
                                                </div>
                                            </div>

                                            {session.reserved_by_user &&
                                                session.cancelled === false && (
                                                    <div className="flex">
                                                        <button
                                                            onClick={() =>
                                                                setOpenCancelationModal(
                                                                    true
                                                                )
                                                            }
                                                            type="button"
                                                            className="flex-1 rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                                                        >
                                                            Cancelar la reserva
                                                        </button>
                                                    </div>
                                                )}

                                            {!session.reserved_by_user &&
                                                session.cancelled === false && (
                                                    <div className="flex">
                                                        <button
                                                            onClick={() =>
                                                                onClose()
                                                            }
                                                            type="button"
                                                            className="flex-1 rounded-md bg-red-50 px-3 py-2 text-sm text-red-500 shadow-xs inset-ring inset-ring-red-300 hover:bg-rose-50 cursor-pointer"
                                                        >
                                                            Cancelar
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                setOpenConfirmationModal(
                                                                    true
                                                                )
                                                            }
                                                            type="button"
                                                            className="ml-3 flex-1 rounded-md bg-tacte-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-tacte-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                                                        >
                                                            Reservar
                                                        </button>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </DialogPanel>
                            ) : (
                                <p>No hay sesión seleccionada</p>
                            )}
                        </div>
                    </div>
                </div>
            </Dialog>
            <ConfirmationModal
                open={openConfirmationModal}
                onClose={() => setOpenConfirmationModal(false)}
                title="Vas a reservar una sesión"
                description="Podrás cancelar la reserva, pero no podrás recuperarla. Debarás ponerte en contacto con el administrador para resevarla de nuevo."
                buttonText="Confirmar"
                icon={
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-100">
                        <InformationCircleIcon className="size-6 text-blue-600" />
                    </div>
                }
                onAction={handleReserve}
            />
            <ConfirmationModal
                open={openCancelationModal}
                onClose={() => setOpenCancelationModal(false)}
                title="Vas a cancelar la reserva"
                description="Para resevarla de nuevo deberás ponerte en contacto con el administrador."
                buttonText="Cancelar reserva"
                icon={
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-rose-100">
                        <XMarkIcon className="size-6 text-red-600" />
                    </div>
                }
                onAction={handleCancel}
            />
        </div>
    );
}
