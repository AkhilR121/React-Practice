type radioBtnProps = {
  radioBtn: string;
  handleRadioBtns: (inp: string) => void;
};
export function RadioBtns({ radioBtn, handleRadioBtns }: radioBtnProps) {
  return (
    <div className="flex items-center justify-center gap-10 font-semibold">
      <div>
        <input
          checked={radioBtn === "complete"}
          value="complete"
          onChange={e => {
            handleRadioBtns(e.target.value);
          }}
          className="mx-1 h-4 w-4"
          type="radio"
          name="default-radio"
        />
        <label className="text-xl">Completed</label>
      </div>

      <div>
        <input
          className="mx-1 h-4 w-4"
          value="incomplete"
          checked={radioBtn === "incomplete"}
          onChange={e => {
            handleRadioBtns(e.target.value);
          }}
          type="radio"
          name="default-radio"
        />
        <label className="text-xl">Incomplete</label>
      </div>

      <div>
        <input
          className="mx-1 h-4 w-4"
          checked={radioBtn === "all"}
          value="all"
          onChange={e => {
            handleRadioBtns(e.target.value);
          }}
          type="radio"
          name="default-radio"
        />
        <label className="text-xl">All</label>
      </div>
    </div>
  );
}
