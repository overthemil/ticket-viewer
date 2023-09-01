import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    theme === "dark" ? (
      <Button onClick={() => setTheme('light')} variant="outline" size="icon">
        <Moon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Change theme to light</span>
      </Button>
    ) : (
      <Button onClick={() => setTheme('dark')} variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Change theme to dark</span>
      </Button>
    )
  );
}

