function divisibleCount(x, y, k) {
    let tableau = [];
    let divisblebyk = 0;
    if (x <= y) {
        for (let index = x; index <= y; index++) {
            tableau.push(index)
            if (index % k === 0) {
                divisblebyk += 1;
            }
        }
    } else {
        for (let element = x; element >= y; element--) {
            tableau.push(element)
            if (element % k === 0) {
                divisblebyk += 1;
            }
        }
    }
    return divisblebyk;
}
