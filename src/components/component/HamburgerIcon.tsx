import { Dispatch } from "react"

type Props = {
  setMenuState: Dispatch<React.SetStateAction<boolean>>,
  menuState: boolean,
  spanCn?: string
}

function HamburgerIcon({ setMenuState, menuState, spanCn }: Props) {
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