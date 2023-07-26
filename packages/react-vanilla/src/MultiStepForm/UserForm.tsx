type UserProps = { firstName: string; lastName: string; age: string };

type UserFormProps = UserProps & {
  updateFields: (fields: Partial<UserProps>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <div className="flex flex-col">
      <div>
        <label>First Name:</label>
        <input
          className="border-2 border-black"
          value={firstName}
          onChange={e => {
            updateFields({ firstName: e.target.value });
          }}
          type="text"
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          className="border-2 border-black"
          value={lastName}
          onChange={e => {
            updateFields({ lastName: e.target.value });
          }}
          type="text"
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          className="border-2 border-black"
          value={age}
          onChange={e => {
            updateFields({ age: e.target.value });
          }}
          type="number"
          min={1}
          required
        />
      </div>
    </div>
  );
}
