

function Bikes () {
	    this.bajaj = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.bajaj);
		        }

	    this.tvs = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.tvs);
		        }

	    this.brake = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.brake);
		        }

	    this.year = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.year);
		        }

	    this.hero = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.hero);
		        }

	    this.honda = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.honda);
		        }

	    this.yamaha = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.yamaha);
		        }

/**
     * year
     *
     * @method faker.Bikes.year
     */
  
    this.year = function() {
        return faker.random.arrayElement(faker.definitions.bikes.year);
    };
}

module['exports'] = Bikes;
