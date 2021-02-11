import { http } from "../request";

// 获取商品列表
export function getGoodsList(query) {
  return http.get(`/goods${query}`).then(res => {
    return res.data;
  });
}
