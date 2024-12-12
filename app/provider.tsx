{/*next-themes package was uploaded and ready code was added from the site*/}
"use client" 

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {// TypeScript type annotation: the props type is taken from the NextThemesProvider component to ensure correct prop types.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
