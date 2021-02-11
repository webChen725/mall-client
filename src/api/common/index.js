import getInstanceWithToken, { http } from "../request";

// 搜索商品
export function searchGoods(keyword) {
  return http.get(`/goods/search?keyword=${keyword}`).then(res => {
    return res.data;
  });
}

// 执行登录
export function login(data){
  return http.post("/users/login", data).then(res => {
    return res;
  })
}

// 获取用户信息
export function getUserInfo(){
  return getInstanceWithToken().get("/users").then(res => {
    return res;
  })
}


// 加载用户购物车信息
export function getUserCarts(){
  return getInstanceWithToken().get("/cart").then(res => {
    return res.data;
  })
}