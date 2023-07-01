import clsx from 'clsx';

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
