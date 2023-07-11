import { useState } from "react";

type DeliveryType = "firstOne" | "secondOne";

function DeliveryOptions() {
  const [clickedDelivery, setClickedDelivery] = useState<DeliveryType>("firstOne")

  const option1 =
  {
    price: 4.99,
    heading: "Standard Delivery",
    text: `Orders will  be delivered within <span class="do__bold">10-12 working days</span>.
                You will receive a confirmation email from our logistic partner with a tracking link.`
  }

  const option2 = {
    price: 9.99,
    heading: "Premium Delivery",
    text: `Orders arrives within <span class="do__bold">3-4 working days</span>.
       You will receive a confirmation email from our logistic partner with a tracking link.`
  }

  return (
    <div className="do">
      <h2 className="do__heading">Delivery Options</h2>
      <ul className="do__lists">
        <li className={`do__list ${clickedDelivery === "firstOne" ? "do__list--active" : ""}`} onClick={() => setClickedDelivery("firstOne")}>
          <div className="do__heading-box">
            <span className="do__heading-inner">{option1.heading}</span>
            <span className="do__price">${option1.price}</span>
          </div>
          <p className="do__paragraph" dangerouslySetInnerHTML={{ __html: option1.text }} />
        </li>

        <li className={`do__list ${clickedDelivery === "secondOne" ? "do__list--active" : ""}`} onClick={() => setClickedDelivery("secondOne")}>
          <div className="do__heading-box">
            <span className="do__heading-inner">{option2.heading}</span>
            <span className="do__price">${option2.price}</span>
          </div>
          <p className="do__paragraph" dangerouslySetInnerHTML={{ __html: option2.text }} />
        </li>
      </ul>
    </div>
  )
}

export default DeliveryOptions