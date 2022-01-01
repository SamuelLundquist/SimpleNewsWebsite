const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

// [IMPORTANT] Need to define your own api key if you wish to use on your own!!!
const apikey = process.env.NEWSAPIKEY || ''

newsRouter.get('', async(req, res) => {
	try {
			const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&language=en&sortBy=popularity&apiKey=${apikey}`)
			res.render('news', {  title: 'Popular', articles: newsAPI.data.articles })
	} catch (err) {
		if(err.response) {
			console.log(err.response.data)
			console.log(err.response.status)
			console.log(err.response.headers)
			res.render('news', { title: null, articles : null })
		} else if (err.requiest) {
			res.render('news', { title: null, articles : null })
			console.log(err.requiest)
		} else {
			res.render('news', { title: null, articles : null })
			console.error('Error', err.message)
		}
	}

})

newsRouter.post('', async(req, res) => {
	let search = req.body.search
	try {
			const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${search}&language=en&sortBy=popularity&apiKey=${apikey}`)
			res.render('newssearch', { articles: newsAPI.data.articles, search: search })
	} catch (err) {
		if(err.response) {
			console.log(err.response.data)
			console.log(err.response.status)
			console.log(err.response.headers)
			res.render('newssearch', { articles : null })
		} else if (err.requiest) {
			res.render('newssearch', { articles : null })
			console.log(err.requiest)
		} else {
			res.render('newssearch', { articles : null })
			console.error('Error', err.message)
		}
	}

})

newsRouter.get('/sports', async(req, res) => {
	try {
			const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&language=en&sortBy=popularity&apiKey=${apikey}`)
			res.render('news', { title: 'Sports', articles: newsAPI.data.articles })
	} catch (err) {
		if(err.response) {
			console.log(err.response.data)
			console.log(err.response.status)
			console.log(err.response.headers)
			res.render('news', { title: null, articles : null })
		} else if (err.requiest) {
			res.render('news', { title: null, articles : null })
			console.log(err.requiest)
		} else {
			res.render('news', { title: null, articles : null })
			console.error('Error', err.message)
		}
	}

})

newsRouter.get('/business', async(req, res) => {
	try {
			const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&language=en&sortBy=popularity&apiKey=${apikey}`)
			res.render('news', { title: 'Business', articles: newsAPI.data.articles })
	} catch (err) {
		if(err.response) {
			console.log(err.response.data)
			console.log(err.response.status)
			console.log(err.response.headers)
			res.render('news', { title: null, articles : null })
		} else if (err.requiest) {
			res.render('news', { title: null, articles : null })
			console.log(err.requiest)
		} else {
			res.render('news', { title: null, articles : null })
			console.error('Error', err.message)
		}
	}

})

newsRouter.get('/entertainment', async(req, res) => {
	try {
			const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&language=en&sortBy=popularity&apiKey=${apikey}`)
			res.render('news', { title: 'Entertainment', articles: newsAPI.data.articles })
	} catch (err) {
		if(err.response) {
			console.log(err.response.data)
			console.log(err.response.status)
			console.log(err.response.headers)
			res.render('news', { title: null, articles : null })
		} else if (err.requiest) {
			res.render('news', { title: null, articles : null })
			console.log(err.requiest)
		} else {
			res.render('news', { title: null, articles : null })
			console.error('Error', err.message)
		}
	}

})

newsRouter.get('/health', async(req, res) => {
	try {
			const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&language=en&sortBy=popularity&apiKey=${apikey}`)
			res.render('news', { title: 'Health', articles: newsAPI.data.articles })
	} catch (err) {
		if(err.response) {
			console.log(err.response.data)
			console.log(err.response.status)
			console.log(err.response.headers)
			res.render('news', { title: null, articles : null })
		} else if (err.requiest) {
			res.render('news', { title: null, articles : null })
			console.log(err.requiest)
		} else {
			res.render('news', { title: null, articles : null })
			console.error('Error', err.message)
		}
	}

})

newsRouter.get('/science', async(req, res) => {
	try {
			const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&language=en&sortBy=popularity&apiKey=${apikey}`)
			res.render('news', { title: 'Science', articles: newsAPI.data.articles })
	} catch (err) {
		if(err.response) {
			console.log(err.response.data)
			console.log(err.response.status)
			console.log(err.response.headers)
			res.render('news', { title: null, articles : null })
		} else if (err.requiest) {
			res.render('news', { title: null, articles : null })
			console.log(err.requiest)
		} else {
			res.render('news', { title: null, articles : null })
			console.error('Error', err.message)
		}
	}

})

newsRouter.get('/technology', async(req, res) => {
	try {
			const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&language=en&sortBy=popularity&apiKey=${apikey}`)
			res.render('news', { title: 'Technology', articles: newsAPI.data.articles })
	} catch (err) {
		if(err.response) {
			console.log(err.response.data)
			console.log(err.response.status)
			console.log(err.response.headers)
			res.render('news', { title: null, articles : null })
		} else if (err.requiest) {
			res.render('news', { title: null, articles : null })
			console.log(err.requiest)
		} else {
			res.render('news', { title: null, articles : null })
			console.error('Error', err.message)
		}
	}

})

module.exports = newsRouter
