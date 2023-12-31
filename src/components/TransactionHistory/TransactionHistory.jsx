import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionhistory}>
      <thead className={css.table}>
        <tr>
          <th className={css.headStyle}>Type</th>
          <th className={css.headStyle}>Amount</th>
          <th className={css.headStyle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.infoStyle}>{item.type}</td>
            <td className={css.infoStyle}>{item.amount}</td>
            <td className={css.infoStyle}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
