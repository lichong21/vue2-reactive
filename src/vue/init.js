import { observer } from './observe'

export function initState(vm) {
	console.log('initState', vm)
	const options = vm.$options
	if (options.data) {
		initData(vm)
	}
}

function initData(vm) {
	let data = vm.$options.data
	vm._data = data = typeof data  === 'function' ? data.call(vm) : data  || {}

	// 数据代理
	for (let key in data) {
		proxyData(vm, '_data', key)
	}

	// 把数据转换为响应式
	observer(data)
}

function proxyData(vm, target, key) {
	Object.defineProperty(vm, key, {
		get() {
			return vm[target][key]
		},
		set(newVal) {
			vm[target][key] = newVal
		}
	})
}