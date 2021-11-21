import $axios from "@/core/plugins/axios";
export default function (token) {
  $axios.defaults.headers.common["Authorization"] = `${token}`;
}
