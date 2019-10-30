//
// h2js-nice4html
//

//
// upg: requires browser dom ... upg: work outside dom? or?
//


const f = html=>{
	let d = document.createElement('div')
	d.textContent = html
	return d.innerHTML
	}

module.exports = f

// export default f
