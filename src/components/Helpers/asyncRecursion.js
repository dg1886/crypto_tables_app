export const synchronousRequst = async (reqArr, onError) => {
  try {
    const [requestFunc, ...otherReq] = reqArr;
    const result = await requestFunc();

    if (otherReq.length === 0) {
      return [result];
    }

    const callRecursion = await synchronousRequst(otherReq);
    return [result, ...callRecursion];
  } catch (error) {
    onError(error.message);
    return null;
  }
};
