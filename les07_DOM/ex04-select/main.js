/*
*
* @param {HTMLElement} container
* @param {Object[]} content
*/

function genTable(container, content) {

let aContainer = document.getElementById('container');

    if (container !== true) {
        let container= document.getElementById('container');
        let numberInput = document.getElementById('number-input');
        let thead = document.getElementById('tr');
        let tr = document.getElementById('');
        for (i = 0, i < nameleght, i++) {
            document.body.append(firstName[i]);
            document.body.append(lastName[i]);
            document.body.append(age[i]);
        }
    } else {

        let headers = Object.keys(content[0]);
        for (let i = 0; i < headers.length; i++) {
            let newTh = document.createElement('tbody');
            newTh.innerText = headers[i];
            newTheadRow.append(newTh);
        }
        newThead.append(newTheadRow);
        newTable.append(newThead);
        container.append(newTable);
    }
}

let data = [
        {
            firstName: 'Willy',
            lastName: 'Vervest',
            age: 34,
        },
        {
            firstName: 'Arthur',
            lastName: 'Lambrecht',
            age: 22,
        },
        {
            firstName: 'Bram',
            lastName: 'Dieudonne',
            age: 19,
        },
        {
            firstName: 'Lennart',
            lastName: 'Verschelden',
            age: 24,
        },
        {
            firstName: 'Raf',
            lastName: 'Vergauwen',
            age: 23,
        },
        {
            firstName: 'Tristan',
            lastName: 'Coopman',
            age: 25,
        },
        {
            firstName: 'Vincent',
            lastName: 'Janssens',
            age: 23,
        },
    ];

genTable(aContainer, data);

