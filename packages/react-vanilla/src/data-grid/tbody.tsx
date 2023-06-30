import { Employee } from "./empData";

export function TableBody({
  employees,
  pgNumber,
}: {
  employees: Employee[];
  pgNumber: number;
}) {
  return (
    <tbody className="[&>*:nth-child(odd)]:bg-slate-600 [&>*:nth-child(odd)]:text-white">
      {employees.slice(pgNumber * 10 - 10, pgNumber * 10).map(emp => {
        return (
          <tr
            key={emp.id}
            className="font-medium [&>*]:h-11 [&>*]:w-52 [&>*]:border-2 [&>*]:px-3 [&>*]:text-sm"
          >
            <td>{emp.id}</td>
            <td>{emp.full_name}</td>
            <td>{emp.company}</td>
            <td>{emp.location}</td>
            <td>{emp.salary}</td>
            <td>{emp.rating}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
