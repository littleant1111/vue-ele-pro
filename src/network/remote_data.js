import { request } from "./request";

export function net_getNavList() {
  return request({
    url: "/nav_list/"
  });
}

/* 老师demo */
// export function getHomeMultiData() {
//   return request({
//     url:'/test/getBanners'
//   });
// }