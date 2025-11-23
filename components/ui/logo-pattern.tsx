"use client"

import { useTheme } from "@/components/theme-provider"

export function LogoPattern() {
  const { theme } = useTheme()
  const stroke = theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"

  return (
    <div className="absolute inset-0 overflow-hidden opacity-50">
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
                stroke={stroke}
                strokeWidth="6"
                strokeLinecap="square"
                style={{ transition: "stroke 0.3s ease" }}
              />
              {/* diagonal secundaria (paralela) */}
              <line
                x1="30"
                y1="90"
                x2="90"
                y2="30"
                stroke={stroke}
                strokeWidth="6"
                strokeLinecap="square"
                style={{ transition: "stroke 0.3s ease" }}
              />
              {/* diagonal cruzada */}
              <line
                x1="10"
                y1="10"
                x2="90"
                y2="90"
                stroke={stroke}
                strokeWidth="6"
                strokeLinecap="square"
                style={{ transition: "stroke 0.3s ease" }}
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#logo-pattern)" />
      </svg>
    </div>
  )
}

