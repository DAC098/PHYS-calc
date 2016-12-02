console.log('test:',Math.PI);
const COULOMBS_CONST = 1 / (4 * Math.PI * (8.85 * (10 ** -12)));

console.log('COULOMBS_CONST:',COULOMBS_CONST);

console.log('stuff here');

function calcElectroStaticForce(charge1,charge2,distance) {
	return COULOMBS_CONST * ((Math.abs(charge1) * Math.abs(charge2)) / (distance ** 2));
}

console.log('test 2:',calcElectroStaticForce(4,8,10));

console.log('test 3:',calcElectroStaticForce(1.6e-19,3.2e-19,.02));
