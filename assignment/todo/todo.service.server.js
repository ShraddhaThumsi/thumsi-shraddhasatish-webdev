/**
 * Created by shraddha on 11/6/16.
 */
module.exports = function (app){

    var todos = [
        {_id: 123, name: "Todo 123"},
        {_id: 234, name: "Todo 234"},
        {_id: 345, name: "Todo 345"},
        {_id: 456, name: "Todo 456"},
        {_id: 567, name: "Todo 567"},
        {_id: 678, name: "Todo 678"}];
    app.get("/api/experiments/todo", getAllTodos);
    app.put("/api/experiments/todo", updateTodos);
    function getAllTodos(req, res)
    {
        res.json(todos);
    }

    function updateTodos(req, res)
    {
        var start = req.query.start;
        var stop = req.query.stop;
        /*console.log([start, stop]);*/
        todos.splice(stop, 0, todos.splice(start, 1)[0]);
        console.log([start, stop]);
    }
};