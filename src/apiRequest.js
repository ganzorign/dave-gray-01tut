const apiRequest = async (url = '', otpionsObject = null, errMsg = null) => {
    try {
        const response = await fetch(url, otpionsObject);
        if (!response.ok) throw Error(errMsg ? errMsg : 'Please reload the app');

    } catch (err) {
        errMsg = err.message;

    } finally {
        return errMsg;
    }
}

export default apiRequest;