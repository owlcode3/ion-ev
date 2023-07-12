import CheckoutStatus from "./CheckoutStatus";
import ContactInformation from "./ContactInformation";
import DeliveryOptions from "./DeliveryOptions";
import SaveAndContinueBtn from "./SaveAndContinueBtn";
import ShippingInformation from "./ShippingInformation";
import YourOrder from "./YourOrder";

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
        <YourOrder />
      </div>
    </div>
  )
}

export default InfoAndShipping