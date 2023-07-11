import CheckoutStatus from "./CheckoutStatus";
import ContactInformation from "./ContactInformation";
import DeliveryOptions from "./DeliveryOptions";
import SaveAndContinueBtn from "./SaveAndContinueBtn";
import ShippingInformation from "./ShippingInformation";

function InfoAndShipping() {
  return (
    <div className="info-shipping">
      <CheckoutStatus />
      <div className="info-shipping__box">
        <div className="info-shipping__box-inner" >
          <ContactInformation />
          <ShippingInformation />
          <DeliveryOptions />
          <SaveAndContinueBtn />
        </div>
      </div>
    </div>
  )
}

export default InfoAndShipping