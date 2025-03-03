"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}) {
    const [mount, setMount] = React.useState(null)
    React.useEffect(() => {
        setMount(true)
    }, [])
  return <NextThemesProvider {...props}>{mount && children}</NextThemesProvider>
}
