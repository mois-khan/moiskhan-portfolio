// src/routes/index.tsx
// Homepage route

import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Skills } from '../components/sections/Skills'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'
import { Achievements } from '../components/sections/Achievements'
import { Contact } from '../components/sections/Contact'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Achievements />
      <Contact />
    </>
  )
}
