import Swal from "sweetalert2";
import { UpdateStatusRequest } from "../APIRequest/APIRequest";

export function UpdateToDoStatus(id, status) {
  return Swal.fire({
    title: "Change Status",
    input: "select",
    inputOptions: {
      New: "New",
      Progress: "Progress",
      Completed: "Completed",
      Canceled: "Canceled",
    },
    inputValue: status,
    showCancelButton: true,
  }).then((result) => {
    // console.log(result)
    if (result.isConfirmed) {
        return UpdateStatusRequest(id, result.value).then((res) => {
            return res;
          });
    } else {
        return false;
    }
  });
}
