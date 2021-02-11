import getInstanceWithToken from "../request";

export const deleteCart = (id) => {
    return getInstanceWithToken().delete(`/cart/${id}`).then(res => res);
}