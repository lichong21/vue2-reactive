
import { initState } from "./init"

export function Vue(options) {
	this._init(options)
}

Vue.prototype._init = function(options) {
	const vm = this
	vm.$options = options
	initState(vm)
}

export default Vue