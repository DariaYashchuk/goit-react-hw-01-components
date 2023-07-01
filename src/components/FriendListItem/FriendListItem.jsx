import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isonline }) => {
  return (
    <li className={css.item}>
      <span
        className={clsx(
          css['status'],
          isonline ? css['isonline'] : css['isoffline']
        )}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isonline: PropTypes.bool.isRequired,
};
