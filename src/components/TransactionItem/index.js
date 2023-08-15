import './index.css'

const TransactionItem = props => {
  const {transaction, deleteTransactionItem} = props
  const {transactionTitle, transactionAmount, transactionType, id} = transaction
  const onClickDeleteIcon = () => {
    deleteTransactionItem(id)
  }

  return (
    <li className="history-item">
      <p className="history-field">{transactionTitle}</p>
      <p className="history-field">Rs {transactionAmount}</p>
      <p className="history-field">{transactionType}</p>
      <button
        type="button"
        data-testid="delete"
        className="delete-btn-bg"
        onClick={onClickDeleteIcon}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-btn"
        />
      </button>
    </li>
  )
}
export default TransactionItem
