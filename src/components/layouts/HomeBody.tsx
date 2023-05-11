import Appointment from "../component/Appointment"
import BestSelling from "../component/BestSelling"
import HowWeWork from "../component/HowWeWork"
import Services from "../component/Services"

function HomeBody() {
  return (
    <div>
      <Services />
      <HowWeWork />
      <BestSelling />
      <Appointment />
    </div>
  )
}

export default HomeBody