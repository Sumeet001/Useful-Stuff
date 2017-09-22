#The call() method calls a function with a given this value and arguments provided individually.
    function.call(thisArg, arg1, arg2, ...)
    
    thisArg
    The value of this provided for the call to a function. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode , null and undefined will be replaced with the global object and primitive values will be converted to objects.
    
    arg1, arg2, ...
    Arguments for the function.
    Return value
    The result of calling the function with the specified this value and arguments.