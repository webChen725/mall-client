import getInstanceWithToken from "../request";

export const getAddrList = () => {
    return getInstanceWithToken().get("/address").then(res => res);
}

export const setDefault = (id) => {
    return getInstanceWithToken().patch(`/address/${id}`, {isDefault: 1}).then(res => {
        return res;
    })
}

export const deleteAddr = (id) => {
    return getInstanceWithToken().delete(`/address/${id}`).then(res => res);
}