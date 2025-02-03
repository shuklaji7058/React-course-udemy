// export default function TabButton({ label }) { this also works
export default function TabButton(props) {
  return (
    <li>
      {/* <button>{label}</button>//... this also works */}
      <button>{props.children}</button>
    </li>
  );
}
