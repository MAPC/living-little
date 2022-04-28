import React, { useContext } from "react";
import { PopupContext } from "../contexts/popupContext";

const Popup = () => {
  
  const { popupState, sourceState } = useContext(PopupContext)
  const [popup, togglePopup] = popupState;
  const [popupSource, setPopupSource] = sourceState;

  return (
    <div className={popup ? "report-image" : "hidden"}>
      <img 
        className={popup ? "popup" : "hidden"} 
        src={popupSource} 
        onClick={() => togglePopup(!popup)}
      />
    </div>
  )
}

export default Popup;