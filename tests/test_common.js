/* テストで使用する関数 */

// 同じキーと値を持っていることの確認
function same_objects(obj1, obj2){
    Object.keys(obj1).forEach(function (key1){
        if (!(key1 in obj2)) {
            return false;
        }
        if (obj1[key1] != obj2[key1]) {
            return false;
        }
    })
    Object.keys(obj2).forEach(function (key2){
        if (!(key2 in obj1)) {
            return false;
        }
        if (obj1[key2] != obj2[key2]) {
            return false;
        }
    })
    return true
}

module.exports = same_objects
