import styles from './myModal.module.scss';

type MyModalProps = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export const MyModal = ({ children, visible, setVisible }: MyModalProps) => {
  const rootClasses = [styles.modal];

  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div
      aria-hidden="true"
      onClick={() => setVisible(false)}
      className={[styles.MyModal, styles.active].join(' ')}
    >
      <div
        aria-hidden="true"
        onClick={(e) => e.stopPropagation()}
        className={styles.modalContent}
      >
        {children}
      </div>
    </div>
  );
};
