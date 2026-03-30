export default function Copyright() {
  const date = new Date();
  return (
    <p className="text-muted text-xs text-center pt-4">
      Copyright © {date.getFullYear()}. Tutti i diritti riservati.
    </p>
  );
}
