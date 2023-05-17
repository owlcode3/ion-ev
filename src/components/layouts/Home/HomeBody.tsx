import Appointment from "../../component/Appointment"
import BestSelling from "../../component/BestSelling"
import HowWeWork from "../../component/HowWeWork"
import Installation from "../../component/Installation"
import Services from "../../component/Services"
import Testimonial from "../../component/Testimonial"

function HomeBody() {
  return (
    <>
      <Services />
      <HowWeWork />
      <BestSelling />
      <Appointment />
      <Testimonial />
      <Installation />
    </>
  )
}

export default HomeBody