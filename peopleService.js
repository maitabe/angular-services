
app.factory('peopleService', function() {

	var peopleList = [
		{
			name:'Jane',
			lastName: 'Doe'
		},
		{
			name:'Toto',
			lastName:'Duck'
		},
		{
			name:'Jack',
			lastName:'Sparrow'
		}
	];

	return peopleList;


});