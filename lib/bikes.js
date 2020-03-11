function bikes () {
	    this.bajaj = function(){
		            return Math.floor(Math.random() * 6)
		        }

	    this.tvs = function(){
		            return Math.floor(Math.random() * 6)
		        }

	    this.bmw = function(){
		            return Math.floor(Math.random() * 6)
		        }

	    this.ktm = function(){
		            return Math.floor(Math.random() * 6)
		        }

	    this.hero = function(){
		            return Math.floor(Math.random() * 6)
		        }

	    this.honda = function(){
		            return Math.floor(Math.random() * 6)
		        }

	    this.yamaha = function(){
		            return Math.floor(Math.random() * 6)
		        }
}

modules['exports'] = bikes;
