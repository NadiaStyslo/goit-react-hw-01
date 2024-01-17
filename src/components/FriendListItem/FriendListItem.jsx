import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? styles.online : styles.offline;
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt={name} width="50" />
      <p className={styles.name}>{name}</p>
      <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default FriendListItem;
