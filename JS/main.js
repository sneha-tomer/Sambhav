const navbar = document.getElementById('navbar');


/* Scroll For Introduction */

const introBTN = document.getElementById('introBTN')
const intro = document.getElementById('intro');


introBTN.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    setTimeout(() => {
        const position = intro.getBoundingClientRect();
        window.scrollTo({
            top: position.top - navbar.offsetHeight - 100,
            left: 0,
            behavior: 'smooth'
        });
    }, 1000);
});


/* Scroll For Skills */

const skillsBTN = document.getElementById('skillsBTN')
const skills = document.getElementById('skills');


skillsBTN.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    setTimeout(() => {
        const position = skills.getBoundingClientRect();
        window.scrollTo({
            top: position.top - navbar.offsetHeight - 100,
            left: 0,
            behavior: 'smooth'
        });
    }, 1000);
});


/* Scroll For Projects */

const projectsBTN = document.getElementById('projectsBTN')
const projects = document.getElementById('projects');


projectsBTN.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    setTimeout(() => {
        const position = projects.getBoundingClientRect();
        window.scrollTo({
            top: position.top - navbar.offsetHeight - 100,
            left: 0,
            behavior: 'smooth'
        });
    }, 1000);
});



const recommendationsBTN = document.getElementById('recommendationsBTN')
const recommendations = document.getElementById('recommendations');


recommendationsBTN.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    setTimeout(() => {
        const position = recommendations.getBoundingClientRect();
        window.scrollTo({
            top: position.top - navbar.offsetHeight - 100,
            left: 0,
            behavior: 'smooth'
        });
    }, 1000);
});


/* Go To Top */
const upBTN = document.getElementById('upBTN');

upBTN.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});



/* Form Submit */

const form = document.forms[0];
const recommends = document.getElementById('recommends');

const thank = document.getElementById('thank');
thank.classList.add('hide');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements[0].value;
    const message = form.elements[1].value;
    console.log(name, message);
    form.reset();

    const recommend = document.createElement('div');
    recommend.classList.add('recommend');
    recommend.innerHTML = `<p>"${message}"</p>`;
    console.log(recommend)
    recommends.appendChild(recommend);

    thank.classList.remove('hide');
    thank.classList.add('show');

});


/*close thank */

const closeBTN = document.getElementById('closeBTN');

closeBTN.addEventListener('click', () => {
    thank.classList.remove('show');
    thank.classList.add('hide');
});
