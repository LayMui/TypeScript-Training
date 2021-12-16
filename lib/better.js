"use strict";
const delay = (ms) => new Promise(res => setTimeout(res, ms));
// work on top of JS promises
// use to resolve a promise after a particular amount of time
const mainAsync = async () => {
    await delay(1000);
    console.log('1s');
    await delay(1000);
    console.log('2s');
};
mainAsync();
