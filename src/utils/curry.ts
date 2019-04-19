const _curry = (fn: Function, ...arg: any[]) => {
	const argLen = arg.length;
	const fnLen = fn.length;
	if (argLen >= fnLen) {
		return fn(...arg);
	} else {
		return (...args: any[]) => {
			return _curry(fn, ...arg, ...args);
		};
	}
};

export {
     _curry
}
