console.log('Running')

import Vue from './vue/index'

const vm = new Vue({
	data() {
		return {
			id: 1,
			name: 'lichong',
			options: [
				{
					label: '游戏',
					value: '游戏'
				},
				{
					label: '音乐',
					value: '音乐'
				},
				{
					label: 'Coding',
					value: 'Coding'
				},
				{
					label: '睡觉',
					value: '睡觉'
				},
			]
		}
	}
})
console.log('--------------------------------')
vm.id = 2
console.log(vm)

vm.options[0].value = 111

console.log('--------------------------------')

console.log(vm.id)

