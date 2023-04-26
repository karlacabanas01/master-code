function elementCommon (array1, array2){
    const filter = array1.filter(element => {
        return array2.includes(element);
    })
    return filter;
}
module.exports = elementCommon;