import myLogo from "./investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={myLogo} />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
