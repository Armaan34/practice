function fun2(a, b) {
    if (b == 0) return 1;
    return fun(a, fun2(a, b - 1));
    }
fun2(2,0)