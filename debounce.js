function debounce(func, delay) {
    let timeoutId;
    return function(... args) {
        // clear timeout id 
        clearTimeout(timeoutId);

        // set new timeout 
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    }

}

function opDebounce(func, delay, options = {}) {
  let timeoutId;
  let lastCallTime = 0;
  
  return function(...args) {
    const now = Date.now();
    
    // If leading is true AND this is the first call (or enough time passed)
    if (options.leading && (now - lastCallTime) >= delay) {
      func(...args);  // Execute immediately
      lastCallTime = now;
    }
    
    clearTimeout(timeoutId);
    
    // Still set a timeout for trailing execution
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  }
}

