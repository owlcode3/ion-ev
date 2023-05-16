import { useEffect, useState } from "react";
import Header from "../component/Header"
import Hero from "../component/Hero"
import MobileNav from "../component/MobileNav"


function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById("root")!.style.overflowY = "hidden"
      document.body.style.overflowY = "hidden"
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById("root")!.style.overflowY = ""
      document.body.style.overflowY = ""
    }
  }, [isMenuOpen])

  return (
    <div className="home-header">
      <Header setMenuState={setIsMenuOpen} menuState={isMenuOpen} />
      <Hero />
      <MobileNav menuState={isMenuOpen} />
    </div>
  )
}

export default HomeHeader