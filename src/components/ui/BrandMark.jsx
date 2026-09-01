/**
 * Marca da Clínica Musumeci — otorrino: ouvido + ondas sonoras.
 * Já vem com o "quadrado" da marca; use direto (h-11 w-11 etc.).
 */
export default function BrandMark({ className = "h-11 w-11" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#084c53" />
      {/* orelha */}
      <path
        d="M13.6 16.2a6.6 6.6 0 1 1 12.9 1.9c-.5 1.9-2.1 2.9-2.6 4.7a3.2 3.2 0 0 1-6 .4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="18.3" cy="16.9" r="2.5" fill="#ffffff" />
      {/* ondas sonoras */}
      <path
        d="M28.7 13.7a5.4 5.4 0 0 1 0 7.6M31.9 10.6a9.9 9.9 0 0 1 0 13.8"
        fill="none"
        stroke="#e0a53d"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
