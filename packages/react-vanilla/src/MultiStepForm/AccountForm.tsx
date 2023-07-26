type UserAccount = {
  email: string;
  password: string;
};

type UserAccountProps = UserAccount & {
  updateFields: (fields: Partial<UserAccount>) => void;
};

export function AccountForm({
  email,
  password,
  updateFields,
}: UserAccountProps) {
  return (
    <div className="flex flex-col">
      <div>
        <label>Email: </label>
        <input
          className="border-2 border-black"
          value={email}
          onChange={e => {
            updateFields({ email: e.target.value });
          }}
          type="email"
          required
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          className="border-2 border-black"
          value={password}
          onChange={e => {
            updateFields({ password: e.target.value });
          }}
          type="password"
          required
        />
      </div>
    </div>
  );
}
