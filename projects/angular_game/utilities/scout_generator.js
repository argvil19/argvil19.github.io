var Scout = function() {

	var nameVal, ageVal, searchVal, survivalVal, moodRate;
	var names = ['Jane', 'Karl', 'Will', 'Tim', 'Resnick', 'Colbert', 'Ken', 'Walder', 'Arthur', 'Rhaegar', 'John', 'Bill', 'Billy', 'Ormund', 'Roberth', 'Dolphin', 'Heather', 'May', 'Joan', 'Josie', 'Mary', 'Molly', 'Jouseff', 'Naahra', 'Evan', 'Myrcella', 'Lindsay', 'Chompin', 'Mamodo', 'Eve', 'Gordon', 'Juan', 'Evelyn'];
	var lastNames = ['Kepler', 'Kausser', 'Lagrange', 'Weller', 'Smith', 'Johnson', 'Williams', 'Brown', 'Mitchell', 'Hill', 'Collins', 'Edwards', 'Stewart', 'Nguyen', 'Cook', 'Rogers', 'Rivera', 'Cooper', 'Reed', 'Kelly', 'Ward', 'Baker', 'Scott', 'Wright', 'Simmons', 'Coleman', 'Taka Taka', 'Sansano', 'Lares'];


	var nameGenerator = function() {
		var nameIndex = Math.floor(Math.random() * names.length);
		var lastNameIndex = Math.floor(Math.random() * lastNames.length);

		return names[nameIndex] + ' ' + lastNames[lastNameIndex];
	};

	var generateAge = function() {
		return Math.floor(Math.random() * 40) + 16;
	};

	var searchRate = function() {
		return Math.random() + 0.1;
	};

	var survivalRate = function() {
		var rate = Math.random() + 0.05;
		return rate;
	};

	var moodRate = function() {
		return Math.random() * 0.9;
	};

	nameVal = nameGenerator();
	ageVal = generateAge();
	searchVal = searchRate();
	survivalVal = survivalRate();
	moodRate = moodRate();

	return {
		name:nameVal,
		age:ageVal,
		search:searchVal,
		survival:survivalVal,
		health:100,
		apetit:10,
		available:1,
		mood:moodRate,
		status:'En espera',
		located:-1,
		price:((searchVal+survivalVal)*100)*0.8,
		patience:100,
		eat:function() {
            this.apetit++;
        },
        takeDamage:function(by) {
        	this.health -= by;
        },
        decPatience:function() {
        	this.patience -= 10;
        },
        restorePatience:function() {
        	if (this.patience < 100) {
        		this.patience += 30;
        	}
        },
        incSurvival:function(by) {
        	this.survival += 0.05;
        }
	};

};