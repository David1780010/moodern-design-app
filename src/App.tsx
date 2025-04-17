import { useEffect } from 'react'
import { WebApp } from '@twa-dev/sdk'
import { motion } from 'framer-motion'

function App() {
  useEffect(() => {
    WebApp.ready()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Добро пожаловать в Telegram WebApp
        </h1>
        <p className="text-gray-600">
          Это стартовый шаблон для вашего приложения
        </p>
      </motion.div>
    </div>
  )
}

export default App 