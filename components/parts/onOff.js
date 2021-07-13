const OnOff = () => {
  return (
    <>
      <input type="checkbox" id="moreInfo" />
      <div className="mi-outer">
        <div className="mi">
          <div className="mi-flap2"></div>
          <label for="moreInfo" className="mi-flap1"></label>
          <div className="mi-flap5">
            <div className="mi-info"></div>
          </div>
          <div className="mi-flap4">
            <div className="mi-info">
              <label for="moreInfo" className="mi-close">
                X
              </label>
            </div>
          </div>
          <div className="mi-flap3">
            <div className="mi-info"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OnOff;
