import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import HomePage from './pages/HomePage'
import BudgetPage from './pages/BudgetPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [expenses, setExpenses] = useState([])

  const parsedIncome = Number(monthlyIncome) || 0
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const savingsLeft = parsedIncome - totalExpenses

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              monthlyIncome={parsedIncome}
              totalExpenses={totalExpenses}
              savingsLeft={savingsLeft}
              expenseCount={expenses.length}
            />
          }
        />
        <Route
          path="/budget"
          element={
            <BudgetPage
              monthlyIncome={monthlyIncome}
              setMonthlyIncome={setMonthlyIncome}
              expenses={expenses}
              setExpenses={setExpenses}
              totalExpenses={totalExpenses}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App