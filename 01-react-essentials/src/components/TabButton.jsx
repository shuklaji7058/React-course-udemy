// export default function TabButton({ label }) { this also works
export default function TabButton({ children }) {
  return (
    <li>
      {/* <button>{label}</button>//... this also works */}
      <button>{children}</button>
    </li>
  );
}
