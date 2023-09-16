import { observer } from "./observe"

const ORIENT_METHODS = [
	'push',
	'pop',
	'shift',
	'unshift',
	'reverse',
	'sort',
	'splice'
]

const originProto  = Array.prototype
export const methodProto = Object.create(originProto)

ORIENT_METHODS.forEach((method)  => {
	methodProto[method] = function() {
		const args = Array.prototype.slice.call(arguments)
		const result =  originProto[method].apply(this, args)

		let newArr;

		switch (method) {
			case 'push':
			case 'unshift':
				newArr = result
				break;
			case 'slice':
				newArr = result.slice(2)
				break
			default:
				break
		}

		newArr && observeArr(newArr)
	}
})


export function observeArr(list) {
	list.forEach(item => {
		observer(item)
	})
}