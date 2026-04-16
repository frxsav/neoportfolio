export default function Sidebar() {
  return (
    <div className="flex flex-col col-span-3 p-4 bg-primary-strong/50 backdrop-blur-md border-r border-secondary-strong/50 overflow-hidden">
      <p className="text-xl bg-primary/75 rounded-t-3xl backdrop-blur-sm text-secondary p-4">
        Navigazione
      </p>
      <ul className="flex flex-col gap-4">
        <li className="p-2 text-sm text-primary font-semibold flex gap-2 items-center py-8 bg-secondary/75 backdrop-blur-sm">
          <div className="h-3 w-3 bg-green" />
          <div className="h-3 w-3 bg-yellow" />
          Home
        </li>
        <li className="p-2 text-sm text-secondary font-semibold flex gap-2 items-center py-8">
          <div className="h-3 w-3 bg-green" />
          <div className="h-3 w-3 bg-yellow" />
          About
        </li>
        <li className="p-2 text-sm text-secondary font-semibold flex gap-2 items-center py-8">
          <div className="h-3 w-3 bg-green" />
          <div className="h-3 w-3 bg-yellow" />
          Chi sono
        </li>
        <li className="p-2 text-sm text-secondary font-semibold flex gap-2 items-center py-8">
          <div className="h-3 w-3 bg-green" />
          <div className="h-3 w-3 bg-yellow" />
          Giochi
        </li>
        <li className="p-2 text-sm text-secondary font-semibold flex gap-2 items-center py-8">
          <div className="h-3 w-3 bg-green" />
          <div className="h-3 w-3 bg-yellow" />
          Home
        </li>
        <li className="p-2 text-sm text-secondary font-semibold flex gap-2 items-center py-8">
          <div className="h-3 w-3 bg-green" />
          <div className="h-3 w-3 bg-yellow" />
          About
        </li>
        <li className="p-2 text-sm text-secondary font-semibold flex gap-2 items-center py-8">
          <div className="h-3 w-3 bg-green" />
          <div className="h-3 w-3 bg-yellow" />
          Chi sono
        </li>
        <li className="p-2 text-sm text-secondary font-semibold flex gap-2 items-center py-8">
          <div className="h-3 w-3 bg-green" />
          <div className="h-3 w-3 bg-yellow" />
          Giochi
        </li>
        <li className="p-2 text-sm text-secondary font-semibold flex gap-2 items-center py-8">
          <div className="h-3 w-3 bg-green" />
          <div className="h-3 w-3 bg-yellow" />
          Home
        </li>
      </ul>
    </div>
  );
}
