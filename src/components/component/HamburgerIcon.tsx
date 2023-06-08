import useAppStore from "../../store"

type Props = {
  spanCn?: string
}

function HamburgerIcon({ spanCn }: Props) {

  const menuState = useAppStore(s => s.productsRef.menu)
  const setMenuState = useAppStore(s => s.setMenu)

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

export default HamburgerIcon