import { observeArr, methodProto } from  './arrayReactive'

export function observer(data) {
	console.log('obsever',data)

	if (data && typeof data === 'object' && data !== null) {
		return new Observe(data)
	}
}

function Observe(data) {
	if (Array.isArray(data)) {
		data._proto__ = methodProto
		observeArr(data)
	} else {
		this.walk(data)
	}
}

Observe.prototype.walk = function(data) {
	for (let key in data) {
		if (Object.hasOwnProperty.call(data, key)) {
			defineReactiveData(data, key, data[key])
		}
	}
}

function defineReactiveData(data, key, value) {
	observer(value)
	Object.defineProperty(data, key, {
		get() {
			console.log('响应式数据：获取', key, value)
			return value
		},
		set(newVal) {
			console.log('响应式数据：设置', key, newVal)
			if (newVal === value) return
			observer(newVal)
			value = newVal
		}
	})
}