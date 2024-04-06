export default function TabButton({ children, isSelected, ...props }) {
  return (
    // isSelected class going to function
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
