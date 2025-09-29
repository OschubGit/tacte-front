import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { TabNames } from "@/lib/enums";
import { CalendarIcon } from "@heroicons/react/20/solid";
import IconBooked from "@/app/(components)/icons/IconBooked";
import IconList from "@/app/(components)/icons/IconList";
import IconCancelBox from "@/app/(components)/icons/IconCancelBox";

const tabs = [
  {
    name: TabNames.ALL,
    href: "#",
    current: false,
    icon: <CalendarIcon className="size-4" />,
  },
  {
    name: TabNames.MY_RESERVATIONS,
    href: "#",
    current: false,
    icon: <IconBooked className="size-4" />,
  },
  {
    name: TabNames.AVAILABLE,
    href: "#",
    current: false,
    icon: <IconList className="size-4" />,
  },
  {
    name: TabNames.CANCELLED,
    href: "#",
    current: false,
    icon: <IconCancelBox className="size-4" />,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsReserves({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm/6 font-medium text-tacte-primary-600 mb-2 sm:hidden">
        Filtrar por
      </label>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-tacte-primary-700 outline-1 -outline-offset-1 outline-tacte-primary-300 focus:outline-2 focus:-outline-offset-2 focus:outline-tacte-primary-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              aria-current={tab.name === activeTab ? "page" : undefined}
              className={classNames(
                tab.name === activeTab
                  ? "bg-[#dce3c391] text-tacte-primary-900 hover:bg-tacte-primary-50"
                  : "text-tacte-primary-500 hover:text-gray-700 hover:bg-[#dce3c391]",
                "rounded-md px-3 py-2 text-sm font-medium cursor-pointer flex items-center gap-x-2"
              )}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
