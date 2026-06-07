
interface HeaderStylesProps {
  scrolled: boolean;
}

export function getHeaderStyles({ scrolled }: HeaderStylesProps): string {
  return `
    fixed top-0 left-0 right-0 z-[1000]
    transition-all duration-500
    h-[72px] flex items-center px-8
    ${
      scrolled
        ? "bg-[rgba(17,56,114,0.98)] backdrop-blur-xl border-b border-[rgba(232,184,75,0.3)] shadow-xl"
        : "bg-[rgba(17,56,114,0.97)] backdrop-blur-xl border-b border-[rgba(232,184,75,0.2)]"
    }
  `;
}