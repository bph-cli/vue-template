import request from "@/utils/request";

export function fetchList(query) {
  return request({
    url: "/goods/list",
    method: "get",
    params: query,
  });
}
