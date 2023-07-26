import useAppStore from "../../store";

function SaveAndContinueBtn() {
  const setStage = useAppStore(s => s.setStage);

  return (
    <button onClick={() => setStage("payment")} className="do__btn" type="button">Save & Continue</button>
  )
}

export default SaveAndContinueBtn