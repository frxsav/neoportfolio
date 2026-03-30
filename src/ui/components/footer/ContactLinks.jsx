export default function ContactLinks() {
  return (
    <div className="pt-4 pb-8">
      <h4 className="font-bold text-lg uppercase tracking-wider text-secondary pb-5">
        Contatti
      </h4>
      <div className="flex flex-row gap-2 text-muted items-center">
        <div className="bg-primary-light p-1 rounded-lg">
          {/* <HiOutlinePhone className="text-xl" /> */}
        </div>
        <span>+39 081 123 4567</span>
      </div>
      <div className="flex flex-row gap-2 text-muted items-center pt-2">
        <div className="bg-primary-light p-1 rounded-lg">
          {/* <HiOutlineMail className="text-xl" /> */}
        </div>
        <span>boilerplate@gmail.com</span>
      </div>
      <div className="flex flex-row gap-2 text-muted items-center pt-2">
        <div className="bg-primary-light p-1 rounded-lg">
          {/* <HiLocationMarker className="text-xl" /> */}
        </div>
        <span>Corso Garibaldi 80, Portici (NA)</span>
      </div>
    </div>
  );
}
