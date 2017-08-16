// Require your NPM library
var target = require('minimist');

/**
 * Expands an object/function to explore all properties
 * 
 * @param {any} switcher The symbolic value
 * @param {any} target The object to be expanded. 
 */
function Expand(switcher, target) {
	var properties = [];

	for (let i in target) {
		if (typeof target[i] === "function") {
			console.log('Pushing ' + target[i].name);
			properties.push(i);
		}
	}

	for (var functionIndex = 0; functionIndex < properties.length; functionIndex++) {
		if (switcher == functionIndex) {
            var targetFunction = target[properties[functionIndex]];
            console.log('Testing ' + targetFunction + ' ' + target[targetFunction]);
			
			// Can't do a for loop without erasing the symbolic nature of all but the last variable
			// TODO Make a array with a custom getter that returns a new symbol on unknown lookups and then records it

			var args = (new Array(targetFunction.length)).map(function(item) { symbolic ExpansionArg initial '' });
			target[properties[switcher]].apply(target, args);
		}
	}
}

function Construct(fn) {
	let args = (new Array(fn.length)).map(x => symbolic Constructor initial '');
	return fn.apply(this, args);
}

// Creates the symbolic variable to explore all possible functions and constructing an object
var switcher = symbolic Switcher initial -1;

if (switcher == -1) {
	var constructedObject = Construct(target);
	var constructedObjectSwitcher = symbolic Target_Switcher initial 0;
	Expand(constructedObjectSwitcher, constructedObject);
} else {
	Expand(switcher, target);
}