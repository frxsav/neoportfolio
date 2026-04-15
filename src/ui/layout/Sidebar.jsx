export default function Sidebar() {
  return (
    <div className="flex flex-col col-span-3 p-4 bg-primary-strong/50 backdrop-blur-lg rounded-l-xl border-t border-l border-b border-secondary/50 overflow-hidden">
      <p className="text-xl bg-contrast-green rounded-t-3xl backdrop-blur-sm text-secondary p-4">
        Navigazione
      </p>
      <ul className="flex flex-col gap-4">
        <li className="p-2 text-sm text-primary font-semibold bg-secondary/75 backdrop-blur-sm">
          <div className="h-3 w-3 bg-contrast-green" />
          <div className="h-3 w-3 bg-contrast-yellow mt-4" />
          Home
        </li>
        <li className="p-2 text-sm text-secondary font-semibold">
          <div className="h-3 w-3 bg-contrast-green" />
          <div className="h-3 w-3 bg-contrast-yellow mt-4" />
          About
        </li>
        <li className="p-2 text-sm text-secondary font-semibold">
          Chi
          <div className="h-3 w-3 bg-contrast-green" />
          <div className="h-3 w-3 bg-contrast-yellow mt-4" />
          sono
        </li>
        <li className="p-2 text-sm text-secondary font-semibold">
          <div className="h-3 w-3 bg-contrast-green" />
          <div className="h-3 w-3 bg-contrast-yellow mt-4" />
          Giochi
        </li>
        <li className="p-2 text-sm text-secondary font-semibold">
          <div className="h-3 w-3 bg-contrast-green" />
          <div className="h-3 w-3 bg-contrast-yellow mt-4" />
          Home
        </li>
        <li className="p-2 text-sm text-secondary font-semibold">
          <div className="h-3 w-3 bg-contrast-green" />
          <div className="h-3 w-3 bg-contrast-yellow mt-4" />
          About
        </li>
        <li className="p-2 text-sm text-secondary font-semibold">
          Chi
          <div className="h-3 w-3 bg-contrast-green" />
          <div className="h-3 w-3 bg-contrast-yellow mt-4" />
          sono
        </li>
        <li className="p-2 text-sm text-secondary font-semibold">
          <div className="h-3 w-3 bg-contrast-green" />
          <div className="h-3 w-3 bg-contrast-yellow mt-4" />
          Giochi
        </li>
        <li className="p-2 text-sm text-secondary font-semibold">
          <div className="h-3 w-3 bg-contrast-green" />
          <div className="h-3 w-3 bg-contrast-yellow mt-4" />
          Home
        </li>
      </ul>
    </div>
  );
}
