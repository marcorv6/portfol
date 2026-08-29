export function LogoPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="logo-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <g transform="translate(10, 10)">
              {/* diagonal principal */}
              <line
                x1="10"
                y1="90"
                x2="90"
                y2="10"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="square"
                className="text-foreground/5 transition-colors duration-300"
              />
              {/* diagonal secundaria (paralela) */}
              <line
                x1="30"
                y1="90"
                x2="90"
                y2="30"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="square"
                className="text-foreground/5 transition-colors duration-300"
              />
              {/* diagonal cruzada */}
              <line
                x1="10"
                y1="10"
                x2="90"
                y2="90"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="square"
                className="text-foreground/5 transition-colors duration-300"
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#logo-pattern)" />
      </svg>
    </div>
  )
}
