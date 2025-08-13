export default function Button({ children, onClick, type, style }) {
  return (
    <button type={type} onClick={onClick} className={style}>
      {children}
    </button>
  );
}
