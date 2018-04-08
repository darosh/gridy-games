const {all} = require('superheroes')

const filtered = all.filter(s => s.length >= 4 && s.length <= 8 && !s.includes(' ') && !s.includes('.') && !s.endsWith('a') && !s.endsWith('ess') && !s.includes('She') && !s.toLowerCase().includes('girl') && !s.toLowerCase().includes('woman') && !s.includes('-') && !s.includes('\'') && !s.includes('’') && !s.endsWith('ey') && !s.endsWith('ne') && !s.endsWith('rs') && !s.endsWith('te') && !s.endsWith('et') && !s.endsWith('ny') && !s.endsWith('er') && !s.endsWith('ns'))

console.log(JSON.stringify(filtered, null, 2))
