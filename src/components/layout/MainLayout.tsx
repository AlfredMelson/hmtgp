import { ReactNode } from 'react'
import { PreloadProvider } from '../../context/PreloadContext'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <PreloadProvider>
      <div id='skip-nav'>{children}</div>
    </PreloadProvider>
  )
}

