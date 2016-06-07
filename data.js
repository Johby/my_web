var data_url= "https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json"
d3.json(data_url, function(data) {
	var someOfTheData = data;
	console.log(data);

	var names = someOfTheData.map(function(nation) {
		return nation.name == 'America';
	});
	console.log(names);
	
	var names1 = someOfTheData.filter(function(nation) {
		return nation.region == 'America';
	});
	console.log(names1);
	

	var numbers = [1,2,3,4,1];
	var smallNumbers = numbers.filter(function (number) {
		return number<=3;
	});
	console.log(smallNumbers)

});