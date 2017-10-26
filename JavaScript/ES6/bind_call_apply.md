#The call() method calls a function with a given this value and arguments provided individually.
    function.call(thisArg, arg1, arg2, ...)
    
    thisArg
    The value of this provided for the call to a function. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode , null and undefined will be replaced with the global object and primitive values will be converted to objects.
    
    arg1, arg2, ...
    Arguments for the function.
    Return value
    The result of calling the function with the specified this value and arguments.

#Bind
    Binds the object for context and returns a function for later execution
    var f=obj1.bind(obj)
    f();

#Apply
    Binds and executes the function instantly 
    func.apply(thisArg, [argsArray])

apply is very similar to call(), except for the type of arguments it supports. You use an arguments array instead of a list of arguments (parameters). With apply, you can also use an array literal, for example, func.apply(this, ['eat', 'bananas']), or an Array object, for example, func.apply(this, new Array('eat', 'bananas')). 
