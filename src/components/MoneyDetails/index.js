import './index.css'

const MoneyDetails = props => {
  const {balance, expenseAmount, incomeAmount} = props
  return (
    <>
      <li className="money-details-item balance-money">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-item-icon"
        />
        <div>
          <p className="money-card-title">Your Balance</p>
          <p className="money-card-description" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="money-details-item income-money">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-item-icon"
        />
        <div>
          <p className="money-card-title">Your Income</p>
          <p className="money-card-description" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </li>
      <li className="money-details-item expense-money">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-item-icon"
        />
        <div>
          <p className="money-card-title">Your Expenses</p>
          <p className="money-card-description" data-testid="expensesAmount">
            Rs {expenseAmount}
          </p>
        </div>
      </li>
    </>
  )
}
export default MoneyDetails
