console.log('test:',Math.PI);
const PERMITTIVITY_CONST = (8.85 * (10 ** -12));
const COULOMBS_CONST = 1 / (4 * Math.PI * PERMITTIVITY_CONST);
const CHARGE_CONST = 1.602 * (10 ** -19);

console.log('COULOMBS_CONST:',COULOMBS_CONST);

console.log('stuff here');

function calcElectroStaticForce(charge1,charge2,distance) {
	return COULOMBS_CONST * ((Math.abs(charge1) * Math.abs(charge2)) / (distance ** 2));
}

function calcElectricField(charge,distance) {
	return COULOMBS_CONST * (charge / (distance ** 2));
}

function calcMagOfElectricField(charge,distance) {
	return Math.abs(calcElectricField(charge,distance));
}

function calcElectricFieldForDipole(charge1,charge2,distance) {
	return
}

console.log('test 2:',calcElectroStaticForce(4,8,10));

console.log('test 3:',calcElectroStaticForce(1.6e-19,3.2e-19,.02));

console.log(`test 4:
	charge 1 = 2Q: ${calcMagOfElectricField(2 * CHARGE_CONST,2)}
	charge 2 = 2Q: ^
	charge 3 = 4Q: ${calcMagOfElectricField(4 * CHARGE_CONST,2)}`);
