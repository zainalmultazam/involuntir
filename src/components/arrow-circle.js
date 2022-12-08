import ArrowTrue from ".././assets/img/arrow-up-circle-success.png";

function ArrowCircle({ success, nominal }) {
  if (success) {
    return (
      <div className="inline-flex w-full  col-span-3">
        <div className="h-full ml-nominal-atas ">
          <img
            src={ArrowTrue}
            className="relative top-1 w-toggle-button2 h-toggle-button2"
            alt=""
          />
        </div>
        <div className="relative left-1 bottom-0.5">
          <span className="text-fundraiser-success font-semibold text-small">
            {nominal}
          </span>
          <span className="text-small relative left-0.5">
            Sejak hari terakhir
          </span>
        </div>
      </div>
    );
  }
}
export default ArrowCircle;
