function throttle(func, delay) {
    let lastExecutionTime = null; // This stays in memory thanks to closure

    return function(...args) {
        const now = Date.now();
        
        // If it's the first time (null) OR enough time passed, run it
        if (lastExecutionTime === null || (now - lastExecutionTime) >= delay) {
            func(...args);
            lastExecutionTime = now; // Update the "memory"
        }
    };
}
