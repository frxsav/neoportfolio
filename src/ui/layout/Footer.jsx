import {
  Logo,
  Socials,
  Copyright,
  ContactLinks,
  LegalLinks,
} from '../components';

export default function Footer() {
  return (
    <footer className="bg-primary px-12 pb-4 py-12 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 border-b-1 border-muted">
        {/* Brand Info */}
        <div className="grid pb-8 pt-4 gap-4">
          <Logo fromFooter={true} />
          <p className="text-muted leading-relaxed mb-6 w-full md:w-[50%]">
            Portiamo in tavola la passione per il buon cibo. Hamburger gourmet,
            ingredienti selezionati e un'atmosfera unica a Portici.
          </p>
          <Socials />
        </div>

        {/* Contatti */}
        <ContactLinks />

        {/* Privacy, Cookies and Terms&Cons */}
        <LegalLinks />
      </div>
      <Copyright></Copyright>
    </footer>
  );
}
