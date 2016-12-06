
function staticVar(ref,key,val) {
	Object.defineProperty(ref,key,{
		value: val,
		writable: false,
		enumerable: false,
		configurable: false
	});
}

function getType(variable) {
	return Object.prototype.toString.call(variable).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

class Vector {
	constructor(i,j,k,x,y,z) {
		if(getType(i) == 'object') {
			let template = {
				i: 0,j: 0,k: 0,x: 0,y: 0,z: 0
			};
			for(let key in template) {
				this[key] = i[key] || 0;
			}
		} else {
			this.i = i || 0;
			this.j = j || 0;
			this.k = k || 0;
			this.x = x || 0;
			this.y = y || 0;
			this.z = z || 0;
		}
		staticVar(this,'is_vector',true);
	}

	inverse() {
		let tmp = this.getData();
		tmp.i = -tmp.i;
		tmp.j = -tmp.j;
		tmp.k = -tmp.k;
		return new Vector(tmp);
	}

	static inverse(initial) {
		let tmp = new Vector(initial);

		return tmp.inverse();
	}

	getData() {
		return {
			i: this.i,
			j: this.j,
			k: this.k,
			x: this.x,
			y: this.y,
			z: this.z
		};
	}

	addVectors(...args) {
		let tmp = this.getData();

		for(let v of args) {
			if(v.is_vector || getType(v) == 'object') {
				tmp.i += v.i || 0;
				tmp.j += v.j || 0;
				tmp.k += v.k || 0;
			} else {
				throw new Error('argument given is not a vector or object');
			}
		}

		return new Vector(tmp);
	}

	static addVectors(initial,...args) {
		let tmp = new Vector(initial);

		return tmp.addVectors(args);
	}

	subVectors(...args) {
		for(let v of args) {
			v = v.is_vector ? v.inverse() : Vector.inverse(v);
		}

		return this.addVectors(args);
	}

	static subVectors(initial,...args) {
		let tmp = new Vector(initial);

		return tmp.subVectors(args);
	}

	multByScalar(scalar) {
		let tmp = this.getData();

		tmp.i = tmp.i * scalar;
		tmp.j = tmp.j * scalar;
		tmp.k = tmp.k * scalar;

		return new Vector(tmp);
	}

	static multByScalar(initial,scalar) {
		let tmp = new Vector(initial);

		return tmp.multByScalar(scalar);
	}

	multByVector(vec) {
		let tmp = this.getData();
		let new_i = (tmp.j * v.k) - (tmp.k * v.j),
			new_j = (tmp.i * v.k) - (tmp.k * v.i),
			new_k = (tmp.j * v.i) - (tmp.i * v.j);
		tmp.i = new_i;
		tmp.j = new_j;
		tmp.k = new_k;

		return new Vector(tmp);
	}

	static multByVector(initial,vec) {
		let tmp = new Vector(initial);

		return tmp.multByVector(vec);
	}

}

let test = new Vector({i:2,j:3,k:7});

console.log('data:',test.getData());

console.log('add:',test.addVectors({i:8,j:0,k:9}).getData());

module.exports = Vector
