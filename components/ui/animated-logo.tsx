"use client"

import { useTheme } from "@/components/theme-provider"

type LogoAnimatedProps = {
  /** Tamaño en px del lado del cuadrado */
  size?: number;
  className?: string;
};

export function LogoAnimated({
  size = 96,
  className,
}: LogoAnimatedProps) {
  const { theme } = useTheme()
  const stroke = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <div
      className={["inline-flex items-center justify-center", className]
        .filter(Boolean)
        .join(" ")}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        aria-hidden="true"
      >
        {/* diagonal principal */}
        <line
          x1="10"
          y1="90"
          x2="90"
          y2="10"
          stroke={stroke}
          strokeWidth="9"
          strokeLinecap="square"
          className="logo-line logo-line-1"
          style={{ transition: "stroke 0.3s ease" }}
        />
        {/* diagonal secundaria (paralela) */}
        <line
          x1="30"
          y1="90"
          x2="90"
          y2="30"
          stroke={stroke}
          strokeWidth="9"
          strokeLinecap="square"
          className="logo-line logo-line-2"
          style={{ transition: "stroke 0.3s ease" }}
        />
        {/* diagonal cruzada */}
        <line
          x1="10"
          y1="10"
          x2="90"
          y2="90"
          stroke={stroke}
          strokeWidth="9"
          strokeLinecap="square"
          className="logo-line logo-line-3"
          style={{ transition: "stroke 0.3s ease" }}
        />
      </svg>

      {/* CSS específico del componente */}
      <style jsx>{`
        .logo-line {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: logo-draw 0.9s ease forwards;
        }

        .logo-line-2 {
          animation-delay: 0.1s;
        }

        .logo-line-3 {
          animation-delay: 0.2s;
        }

        @keyframes logo-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Respeto a usuarios con reducción de movimiento */
        @media (prefers-reduced-motion: reduce) {
          .logo-line {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
