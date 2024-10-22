// const logger = require("./logger");
// const { spawn } = require('child_process');

const wrapInArray = (a) => { return a instanceof Array ? a : a ? [a] : [];}

const withFailSafe = (value, message) => (target) => async (...args) => {
  try {
	const val = await target(...args);
    return val;
  } catch (e: any) {
    console.error(e.stack); 
    // if (sendResponse) {
    //     return sendResponse(args[1], 500, message, {}, [e.stack], value);
    // } 
    return wrapServiceResult(null, [e.message, e.stack])
  }
};

const wrapServiceResult = (value, errors) => {
 return {
	 value,
	 errors: wrapInArray(errors)
 }
}

// const sendResponse = (res, status, message, headers, errors, data) => {
// 	res.status(status || 200).send({
// 		status,
// 		message: wrapInArray(message),
// 		data,
// 		errors: wrapInArray(errors),
// 	});
// }

export {
    wrapInArray,
	withFailSafe,
	wrapServiceResult,
}