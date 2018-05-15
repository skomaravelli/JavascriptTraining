Object.prototype.hash = function (string) {
    var arr = string.split('.'), property = this;
    for (i = 0; i < arr.length; i++) {
        property = property ? property[arr[i]] : undefined;
        console.log(property);
    }
    return property;
}