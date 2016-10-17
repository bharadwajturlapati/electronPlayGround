function defineGetter(obj, prop, get) {
	if (Object.defineProperty)
		return Object.defineProperty(obj, prop, accessorDescriptor("get", get));
	if (Object.prototype.__defineGetter__)
		return obj.__defineGetter__(prop, get);
}

function defineSetter(obj, prop, set) {
	if (Object.defineProperty)
		return Object.defineProperty(obj, prop, accessorDescriptor("set", set));
	if (Object.prototype.__defineSetter__)
		return obj.__defineSetter__(prop, set);
}