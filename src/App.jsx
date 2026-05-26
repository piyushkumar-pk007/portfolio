import { lazy, Suspense, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import RouteSkeleton from './components/RouteSkeleton'

const Home = lazy(() => import('./routes/Home'))
const ProjectDetail = lazy(() => import('./routes/ProjectDetail'))

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  const prefersReducedMotion = useReducedMotion()
  const pageTransition = prefersReducedMotion
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -18 },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <Suspense fallback={<RouteSkeleton />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <motion.div {...pageTransition}>
                <ProjectDetail />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div {...pageTransition}>
                <Home />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  )
}

export default App
