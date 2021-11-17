import Vue from "vue";
import Swal from "sweetalert2";
Vue.prototype.$SwalChecks = (warningText) => {
  return Swal.fire({
    title: "Are you sure?",
    text: warningText,
    type: "warning",
    confirmButtonColor: "#3085d6",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  });
};
