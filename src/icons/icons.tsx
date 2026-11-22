type IconProps = {
  name: "tests" | "statistics" | "profile" | "logout" | "eye" | "eyeOff";
  size?: number;
};

export function Icon({ name, size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "tests" && (
        <>
          <rect x="3" y="3" width="7" height="7" rx="0.5" />
          <rect x="14" y="3" width="7" height="7" rx="0.5" />
          <rect x="3" y="14" width="7" height="7" rx="0.5" />
          <rect x="14" y="14" width="7" height="7" rx="0.5" />
        </>
      )}

      {name === "statistics" && (
        <>
          <path d="M3 3v18h18" />
          <path d="M7 16l4-6 4 3 4-7" />
          <path d="M17 6h2v2" />
        </>
      )}

      {name === "profile" && (
        <>
          <circle cx="12" cy="7" r="4" />
          <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
        </>
      )}

      {name === "logout" && (
        <>
          <path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5" />
          <path d="M14 8l4 4-4 4M8 12h10" />
        </>
      )}

      {(name === "eye" || name === "eyeOff") && (
        <>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
          <circle cx="12" cy="12" r="3" />
          {name === "eyeOff" && <path d="M3 3l18 18" />}
        </>
      )}
    </svg>
  );
}
