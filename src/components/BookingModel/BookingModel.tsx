import React, { useState } from "react";

const BookingModel = () => {
      const [iframeLink, setLink ]= useState(import.meta.env.VITE_ZOOM_IFRAME_LINK) ;
      console.log(iframeLink);

    const reloadPage=(event:Event)=>{
        event.preventDefault();
        window.location.reload();

    }
  return (
    <div
      class="modal fade"
      id="bookingModal"
      data-bs-backdrop="false"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class={"container-fluid"}>
              <div class={"row"}>
                <iframe
                  src={iframeLink}
                  frameborder="0"
                  style="width: 560px; height: 750px;"
                ></iframe>
              </div>
            </div>
          
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={(event)=>{
                reloadPage(event);
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;


