import { Link } from "react-router-dom"

function LogoGreen() {
  return (
    <Link to="/" className="logo-green">
      <span className="logo-green__icon-box"><img src="/logo-2.svg" alt="logo" /></span> <span className="logo-green__text-box">ion ev</span>
    </Link>
  )
}

export default LogoGreen