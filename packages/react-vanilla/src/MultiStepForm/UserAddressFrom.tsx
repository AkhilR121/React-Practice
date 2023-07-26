type UserLocation = {
  street: string;
  city: string;
  state: string;
  zip: string;
};
type UserAddressProps = UserLocation & {
  updateFields: (fields: Partial<UserLocation>) => void;
};
export function UserAddress({
  street,
  city,
  state,
  zip,
  updateFields,
}: UserAddressProps) {
  return (
    <div className="flex flex-col">
      <div>
        <label>Street: </label>
        <input
          className="border-2 border-black"
          value={street}
          onChange={e => {
            updateFields({ street: e.target.value });
          }}
          type="text"
          required
        />
      </div>
      <div>
        <label>City: </label>
        <input
          className="border-2 border-black"
          value={city}
          onChange={e => {
            updateFields({ city: e.target.value });
          }}
          type="text"
          required
        />
      </div>
      <div>
        <label>State: </label>
        <input
          className="border-2 border-black"
          value={state}
          onChange={e => {
            updateFields({ state: e.target.value });
          }}
          type="text"
          required
        />
      </div>
      <div>
        <label>Zip: </label>
        <input
          className="border-2 border-black"
          value={zip}
          onChange={e => {
            updateFields({ zip: e.target.value });
          }}
          type="number"
          required
        />
      </div>
    </div>
  );
}
