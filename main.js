
const PERMITTIVITY_CONST = 8.85e-12;
const COULOMBS_CONST = 1 / (4 * Math.PI * PERMITTIVITY_CONST);
const CHARGE_CONST = 1.602e-19;

const METRIC_PREFIX = {
	Y:  24,Z:  21,E:  18,P:  15,T:  12,G:  9,M:  6,k:  3,h:  2,da: 1,
	y: -24,z: -21,a: -18,f: -15,p: -12,n: -9,μ: -6,m: -3,c: -2,d: -1
};

console.log('COULOMBS_CONST:',COULOMBS_CONST);

function getType(variable) {
	return Object.prototype.toString.call(variable).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

function calcElectricFieldForDipole(charge1,charge2,distance) {
	return
}

function Vector() {

	this.stuff = function stuff() {
		console.log('stuff');
		console.log('name:',this.name);
		console.log('caller:',this.caller);
		console.log('displayName:',this.displayName);
	}

};

var v1 = new Vector();
var test = v1.stuff();
var date = new Date();
var array = [];

console.log('v1 type:',getType(v1));
console.log('v1 constructor:',v1.constructor.name);
console.log('date:',date.constructor.name);
console.log('array:',array.constructor.name);
console.log('array constructor:',array.constructor);

const calc = {
	ElectroStaticForce: function(charge1,charge2,distance) {
		return COULOMBS_CONST * ((Math.abs(charge1) * Math.abs(charge2)) / (distance ** 2));
	},
	ElectricField: function(charge,distance) {
		return COULOMBS_CONST * (charge / (distance ** 2));
	},
	MagOfElectricField: function(charge,distance) {
		return Math.abs(calc.ElectricField(charge,distance));
	},
}

console.log('test 2:',calc.ElectroStaticForce(4,8,10));

console.log('test 3:',calc.ElectroStaticForce(1.6e-19,3.2e-19,.02));

console.log(`test 4:
	charge 1 =  2Q: ${calc.ElectricField(-2 * CHARGE_CONST,2)}
	charge 2 = -2Q: ${calc.ElectricField(2 * CHARGE_CONST,2)}
	charge 3 =  4Q: ${calc.ElectricField(4 * CHARGE_CONST,2)}`);
