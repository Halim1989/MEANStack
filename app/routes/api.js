var Todo = require('../models/todo');
var config = require('../../config');

module.exports = function(app, express) {
	// get an instance of the express router
	var apiRouter = express.Router();

	// test route to make sure everything is working
	// accessed at GET http://localhost:8080/api
	apiRouter.get('/', function(req, res) {
		res.json({
			message: 'Welcome to my public api !'
		});
	});

	// on routes that end in /todos
	// ----------------------------------------------------
	apiRouter.route('/todos')

	// create a todo (accessed at POST http://localhost:8080/api/todos)
	.post(function(req, res) {

			// create a new instance of the Todo model
			var todo = new Todo();

			// set the todos information (comes from the request)
			todo.task = req.body.task;

			// save the user and check for errors
			todo.save(function(err) {
				if (err) {
					return res.send(err);
				}

				res.json({
					message: 'Todo created !'
				});
			});
	})
	// get all the todos (accessed at GET http://localhost:8080/api/todos)
	.get(function(req, res) {
		Todo.find(function(err, todos) {
			if (err) res.send(err);

			// return the users
			res.json(todos);
		});
	});

	// on routes that end in /todos/:todo_id
	// ----------------------------------------------------
	apiRouter.route('/todos/:todo_id')

	// get the user with that id
	// (accessed at GET http://localhost:8080/api/users/:user_id)
	.get(function(req, res) {
		Todo.findById(req.params.todo_id, function(err, todo) {
			if (err) res.send(err);

			// return that user
			res.json(todo);
		});
	})
	// update the todo with this id
	// (accessed at PUT http://localhost:8080/api/todos/:todo_id)
	.put(function(req, res) {

		// use our todo model to find the todo we want
		Todo.findById(req.params.todo_id, function(err, todo) {

			if (err) res.send(err);

			// update the todo info only if its new
			if (req.body.task) todo.task = req.body.task;

			// save the todo
			todo.save(function(err) {
				if (err) res.send(err);

				// return a message
				res.json({
					message: 'Todo updated !'
				});
			});

		});
	})
	// delete the todo with this id
	// (accessed at DELETE http://localhost:8080/api/todos/:todo_id)
	.delete(function(req, res) {
		Todo.remove({
			_id: req.params.todo_id
		}, function(err, todo) {
			if (err) return res.send(err);

			res.json({
				message: 'Successfully deleted !'
			});
		});
	});
	
	return apiRouter;

}