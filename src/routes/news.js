const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async(req, res) => {

	try {
			const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1f31f9ff71e74fe48d07266d58b211bd')
			res.render('news', { articles: newsAPI.data.articles })
			console.log(newsAPI.data.articles)
	} catch (err) {
		if(err.response) {
			console.log(err.response.data)
			console.log(err.response.status)
			console.log(err.response.headers)
			res.render('news', { articles : null })
		} else if (err.requiest) {
			res.render('news', { articles : null })
			console.log(err.requiest)
		} else {
			res.render('news', { articles : null })
			console.error('Error', err.message)
		}
	}

})

module.exports = newsRouter
