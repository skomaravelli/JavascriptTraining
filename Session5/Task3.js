//	http://www.codewars.com/kata/new-with-apply

function construct(Class) {
    return new (Class.bind.apply(Class, arguments))();
}