import './App.css'
import AppRoutes from './routes'
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppRoutes/>
      <Toaster/>
    </div>
  )
}

export default App
