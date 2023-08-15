import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionTitle: '',
    transactionAmount: '',
    transactionType: transactionTypeOptions[0].displayText,
    transactionList: [],
  }

  deleteTransactionItem = historyId => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        transaction => transaction.id !== historyId,
      ),
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {transactionTitle, transactionAmount, transactionType} = this.state

    const newTransactionType =
      transactionType === 'Income' ? 'Income' : 'Expenses'

    const newTransaction = {
      id: uuidv4(),
      transactionTitle,
      transactionAmount,
      transactionType: newTransactionType,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      transactionTitle: '',
      transactionAmount: '',
      transactionType: transactionTypeOptions[0].displayText,
    }))
  }

  onEnterTransactionTitle = event => {
    this.setState({transactionTitle: event.target.value})
  }

  onEnterTransactionAmount = event => {
    this.setState({transactionAmount: event.target.value})
  }

  onClickTransactionType = event => {
    this.setState({transactionType: event.target.value})
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.transactionType === 'Income') {
        incomeAmount += parseInt(eachTransaction.transactionAmount)
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenseAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.transactionType === 'Expenses') {
        expenseAmount += parseInt(eachTransaction.transactionAmount)
      }
    })
    return expenseAmount
  }

  render() {
    const {
      transactionList,
      transactionTitle,
      transactionAmount,
      transactionType,
    } = this.state
    const incomeValue = this.getIncome()
    const expenseValue = this.getExpenses()
    const balance = incomeValue - expenseValue

    return (
      <div className="money-manager-app">
        <div className="money-manager-header-sec">
          <h1 className="header-sec-name">Hi, Richard</h1>
          <p className="header-sec-description">
            Welcome back to your <span> Money Manager</span>
          </p>
        </div>
        <ul className="money-details-container">
          <MoneyDetails
            incomeAmount={incomeValue}
            expenseAmount={expenseValue}
            balance={balance}
          />
        </ul>
        <div className="money-manager-bottom-sec">
          <form className="transaction-form" onSubmit={this.onSubmitForm}>
            <h1 className="transaction-form-title">Add Transaction</h1>
            <div className="form-field-container">
              <label htmlFor="title" className="label-text">
                TITLE
              </label>
              <input
                type="text"
                className="input-field"
                id="title"
                placeholder="TITLE"
                value={transactionTitle}
                onChange={this.onEnterTransactionTitle}
              />
            </div>
            <div className="form-field-container">
              <label htmlFor="amount" className="label-text">
                AMOUNT
              </label>
              <input
                type="text"
                className="input-field"
                id="amount"
                placeholder="AMOUNT"
                value={transactionAmount}
                onChange={this.onEnterTransactionAmount}
              />
            </div>
            <div className="form-field-container">
              <label htmlFor="type" className="label-text">
                TYPE
              </label>
              <select
                className="money-type"
                onClick={this.onClickTransactionType}
              >
                {transactionTypeOptions.map(transaction => (
                  <option
                    className="option-value"
                    value={transaction.optionId}
                    key={transaction.optionId}
                  >
                    {transaction.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <div className="transaction-history-container">
            <h1 className="history-container-main-title">History</h1>
            <div className="history-container-column-container">
              <p className="history-container-column-name">Title</p>
              <p className="history-container-column-name">Amount</p>
              <p className="history-container-column-name">Type</p>
            </div>
            <ul className="transaction-container">
              {transactionList.map(transaction => (
                <TransactionItem
                  transaction={transaction}
                  key={transaction.id}
                  deleteTransactionItem={this.deleteTransactionItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
