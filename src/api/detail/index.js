import getInstanceWithToken from "../request";

// 商品加入购物车;
export function addCart(data){
    return getInstanceWithToken().post("/cart/add", data).then(res => {
        return res;
    })
}