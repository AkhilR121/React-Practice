"use strict";
exports.__esModule = true;
exports.TableBody = void 0;
function TableBody(_a) {
    var employees = _a.employees, pgNumber = _a.pgNumber;
    return (<tbody className="[&>*:nth-child(odd)]:bg-slate-600 [&>*:nth-child(odd)]:text-white">
      {employees.slice(pgNumber * 10 - 10, pgNumber * 10).map(function (emp) {
            return (<tr key={emp.id} className="font-medium [&>*]:h-11 [&>*]:w-52 [&>*]:border-2 [&>*]:px-3 [&>*]:text-sm">
            <td>{emp.id}</td>
            <td>{emp.full_name}</td>
            <td>{emp.company}</td>
            <td>{emp.location}</td>
            <td>{emp.salary}</td>
            <td>{emp.rating}</td>
          </tr>);
        })}
    </tbody>);
}
exports.TableBody = TableBody;
