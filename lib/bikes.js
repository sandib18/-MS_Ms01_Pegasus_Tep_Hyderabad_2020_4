

function Bikes () {
	    this.bajaj = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.bajaj);
		        }

	    this.tvs = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.tvs);
		        }

	    this.bmw = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.bmw);
		        }

	    this.ktm = function(){
		            return faker.random.arrayElement(faker.definitions.bikes.ktm);
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

modules['exports'] = Bikes;
