

const getCurrentPath = (path) => {
    return {
        type: "GET_CURRENT_PATH",
        path
    };
};

export {
    getCurrentPath
};