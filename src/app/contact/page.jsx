import ContactForm from '@/ui/components/form/ContactForm';
import MiniHero from '@/ui/components/MiniHero';

export default function Contact() {
  return (
    <section className="flex flex-col min-h-screen bg-secondary gap-8 pb-16">
      <MiniHero title="Contact" />
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </section>
  );
}
