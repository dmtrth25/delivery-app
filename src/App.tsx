import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"

const Cart = lazy(() => import("./pages/Cart"))

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
