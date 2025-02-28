// we have to import it like this of original index.js content from bootstrap file so that we can allow asynchronously load bootstrap file content and so our faker library from it as we have mentioned faker library to be shared between our product and cart project in container project as to avoid duplicate imports during container load to avoid extra http request
import('./bootstrap') // this is using import function to load up bootstrap file content asynchronously

// so webpack will get a chance to load faker and any other modules before it starts execution  
// so that our product or cart should load faker library and runs in isolation 