export const setMapLocation = (lon, lat, zoom) => {
    return ({
        type: 'MOVE_MAP', 
        payload: {lon, lat, zoom}
    })
}