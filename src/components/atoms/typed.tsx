import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ strings }) => {
	const typedRef = useRef(null);

	useEffect(() => {
		const options = {
			strings: strings,
			typeSpeed: 50,
			backSpeed: 25,
			backDelay: 2000,
			loop: true,
		};

		const typed = new Typed(typedRef.current, options);

		return () => {
			typed.destroy();
		};
	}, [strings]);

	return <span ref={typedRef}></span>;
};

export default TypedText;
