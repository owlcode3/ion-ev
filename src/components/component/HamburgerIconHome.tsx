import useAppStore from "../../store"

type Props = {
  spanCn?: string
}

function HamburgerIconHome({ spanCn }: Props) {

  const menuState = useAppStore(s => s.productsRef.homeMenu)
  const setMenuState = useAppStore(s => s.setHomeMenu)

  return (
    <>
      <input type="checkbox" onClick={() => setMenuState(!menuState)} className="header__checkbox" id="checkbox" />
      <label className="header__hamburger">
        <span className={"header__hamburger-line" + " " + `${spanCn}`}></span>
        <span className={"header__hamburger-line" + " " + `${spanCn}`}></span>
      </label>
    </>
  )
}

export default HamburgerIconHome