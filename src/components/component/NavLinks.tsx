import { Link } from 'react-router-dom'

type Props = {
  parentCn: string,
  childCn: string,
}

function NavLinks({ parentCn, childCn }: Props) {
  return (
    <nav className={parentCn}>
      <Link className={childCn} to="/">Home</Link>
      <Link className={childCn} to="/">Installation</Link>
      <Link className={childCn} to="/shop">Shop</Link>
    </nav>)
}

export default NavLinks