"use strict";
fetch('http://localhost:3001/importCompanies', {
    method: 'GET',
}).then((val) => {
    console.log('val', val);
});
