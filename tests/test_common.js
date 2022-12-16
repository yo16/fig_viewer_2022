/* テストで使用する関数 */

// 同じキーと値を持っていることの確認
function same_objects(obj1, obj2) {
    // 内部関数
    const same_obj_inner = function(o1, o2) {
        Object.keys(o1).forEach(key1 => {
            // 型が一致
            if (!same_types(o1[key1], o2[key1])) {
                return false;
            }

            // 値が一致
            if (!same_values(o1[key1], o2[key1])) {
                return false;
            }
        })
        return true;
    }

    // 1のキーと2のキーが一致
    Object.keys(obj1).forEach(key1 => {
        if (!(key1 in obj2)) {
            return false;
        }
    })
    Object.keys(obj2).forEach(key2 => {
        if (!(key2 in obj1)) {
            return false;
        }
    })

    // 値の比較
    if (!(same_obj_inner(obj1, obj2))) {
        // キーは一致しているため、obj1のキーだけでループを回してよい
        Object.keys(obj1).forEach(key1 => {
            // 型が一致
            if (!same_types(obj1[key1], obj2[key1])) {
                return false;
            }

            // 値が一致
            if (!same_values(obj1[key1], obj2[key1])) {
                return false;
            }
        })
    }

    return true;
}


// 配列同士の比較
function same_arrays(ary1, ary2) {
    // 長さ
    if (ary1.length != ary2.length) {
        return false;
    }

    for(let i=0; i<ary1.length; i++) {
        let elm1 = ary1[i];
        let elm2 = ary2[i];

        // 型の比較
        if (!same_types(elm1, elm2)) {
            return false;
        }
        
        // 値の比較
        if (!same_values(elm1, elm2)) {
            return false;
        }
    }

    return true;
}


// 型の比較
function same_types(elm1, elm2) {
    if ((typeof elm1) != (typeof elm2)) {
        return false;
    }
    if ((typeof elm1) == 'object') {
        if (Array.isArray(elm1)) {
            if (!(Array.isArray(elm2))) {
                // 1がArray、2はArrayでない
                return false;
            }
        } else {
            if (Array.isArray(elm2)) {
                // 1がArrayでない、2はArray
                return false;
            }
        }
    }
    return true;
}


// 値が一致
// 型は一致している前提
function same_values(elm1, elm2) {
    if ((typeof elm1) == 'object') {
        if (Array.isArray(elm1)) {
            // 配列の比較
            if (!same_arrays(elm1, elm2)) {
                return false;
            }
        } else {
            // オブジェクトの比較
            if (!same_objects(elm1, elm2)) {
                return false;
            }
        }
    } else {
        if (elm1 != elm2) {
            return false;
        }
    }
    return true;
}


module.exports = same_objects
