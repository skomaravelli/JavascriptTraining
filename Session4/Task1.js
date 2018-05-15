var Cat = (function () {
  var name = '', weight = '';
  var module = {}; 
  
  function Cat(name, weight) {
        this.name = name;
        weight = weight;
        // console.log(weight);
    }
   console.log(weight);
    Object.defineProperty(module, "averageWeight", {
		get: function() {
			return Cat.weight;
		},
		set: function(value) {
			Cat.weight = Cat.weight + value;
		}
	});
  
    Cat.averageWeight = function() {
		  console.log(Cat.weight);
    }
    
  return Cat;
}());
