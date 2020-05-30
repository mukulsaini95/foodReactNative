import axios from 'axios';

export default axios.create({
	baseURL:"https://api.yelp.com/v3/businesses",
	headers:{
		Authorization:'Bearer xTqgTd6G0OzRNjribMOnPVahC47U-O8F5Dl5JkOd69S2uhEttPXYlPvywWxpim4ozSLyifPJpVY7yN2hE2raOxwyqp2roeXOObqSgH72i-5mNDZVENXMBIYtZq2lXnYx'
	}
})