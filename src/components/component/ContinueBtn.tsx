import useAppStore from "../../store";

function ContinueBtn() {

  const setStage = useAppStore(s => s.setStage);

  return (
    <button onClick={() => setStage("summary")} className="card-information__btn" type="button">Continue</button>
  )
}

export default ContinueBtn