//-	http://www.codewars.com/kata/function-composition-1

function compose() {
 var args = [].slice.call(arguments, 0);
    return function(input) {
    	return args.reduceRight(addValues, input);
    };
}

function addValues(val, step) {
	return step(val);
}