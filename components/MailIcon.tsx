export default function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className}
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 6L12 13L22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}