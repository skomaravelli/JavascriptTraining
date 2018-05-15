function compose(f, g) {
    return function () {
        var  args  =  [].slice.call(arguments,  0);
        return f(g.apply(this, args));
    }
}