import { Sessions } from "@/lib/types";
import React from "react";
import ReservedSesions from "./ReservedSesions";
import AvailableSesions from "./AvailableSesions";
import CanceledSesions from "./CanceledSesions";
import TabsReserves from "./TabsReserves";
import { TabNames } from "@/lib/enums";

const AuthenticatedSessions = ({
  sessions,
  setOpenDrawer,
  setSession,
  activeTab,
  setActiveTab,
}: {
  sessions: Sessions[];
  setOpenDrawer: (open: boolean) => void;
  setSession: (session: Sessions) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return sessions?.length > 0 ? (
    (() => {
      const sortedSessions = sessions?.sort((a, b) => {
        // Primero ordenar por reserved_by_user
        if (a.reserved_by_user && !b.reserved_by_user) return -1;
        if (!a.reserved_by_user && b.reserved_by_user) return 1;
        // Si tienen el mismo estado de reserva, ordenar por fecha
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });

      const reservedSessions = sortedSessions?.filter(
        (s) => s.reserved_by_user && s.cancelled === false
      );
      const availableSessions = sortedSessions?.filter(
        (s) => !s.reserved_by_user && s.cancelled === false
      );

      const cancelledSessions = sortedSessions?.filter((s) => s.cancelled);

      // Función para determinar qué secciones mostrar según la pestaña activa
      const shouldShowReserved =
        activeTab === TabNames.ALL || activeTab === TabNames.MY_RESERVATIONS;
      const shouldShowAvailable =
        activeTab === TabNames.ALL || activeTab === TabNames.AVAILABLE;
      const shouldShowCancelled =
        activeTab === TabNames.ALL || activeTab === TabNames.CANCELLED;

      return (
        <>
          <div className="mt-4 mb-10">
            <TabsReserves activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {shouldShowReserved && (
            <ReservedSesions
              reservedSessions={reservedSessions}
              setOpenDrawer={setOpenDrawer}
              setSession={setSession}
            />
          )}

          {shouldShowAvailable && (
            <AvailableSesions
              availableSessions={availableSessions}
              setOpenDrawer={setOpenDrawer}
              setSession={setSession}
            />
          )}

          {shouldShowCancelled && (
            <CanceledSesions cancelledSessions={cancelledSessions} />
          )}
        </>
      );
    })()
  ) : (
    <div className="rounded-md bg-blue-50 p-4 mt-10">
      <div className="flex">
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">No hay sesiones disponibles.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedSessions;
