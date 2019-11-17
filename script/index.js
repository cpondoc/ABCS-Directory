var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1PgI8-fSbtK9cU03LUyiE8bangSVtCRpi3JBnXNulvvI/edit?usp=sharing';
var books = [];

function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                 callback: showInfo,
                 simpleSheet: true } );
}

function showInfo(data, tabletop) {
    console.log(data);
    parseData(data);
}

function setVue() {
    var app = new Vue({ 
        el: '#app',
        data: {
            title: 'Advanced Biomedical Computational Science Directory',
            description: 'This project is a visual directory of some of the employees in the Advanced Biomedical Computational Science (ABCS) department at the Frederick National Lab for Cancer Research.',
            cools: books
        }
    });
}

function createPlan() {
    Vue.component('plan', {
        template: '#plan-template',
        props: {

            // Properties for the 1st Person
            name_1: String,
            work_1: String,
            quote_1: String,
            image_1: String,
            duties_1: String,
            skills_1: String,
            enjoy_1: String,
            least_1: String,
            education_1: String,
            application_1: String,

            //Properties for the 2nd Person
            name_2: String,
            work_2: String,
            quote_2: String,
            image_2: String,
            duties_2: String,
            skills_2: String,
            enjoy_2: String,
            least_2: String,
            education_2: String,
            application_2: String
        }
    })
}

function BookPair(name_1, work_1, quote_1, image_1, duties_1, skills_1, enjoy_1, least_1, education_1, application_1, name_2, work_2, quote_2, image_2, duties_2, skills_2, enjoy_2, least_2, education_2, application_2) {

    // Properties for 1st Person
    this.name_1 = name_1;
    this.work_1 = work_1;
    this.quote_1 = quote_1;
    this.image_1 = image_1;
    this.duties_1 = duties_1;
    this.skills_1 = skills_1;
    this.enjoy_1 = enjoy_1;
    this.least_1 = least_1;
    this.education_1 = education_1;
    this.application_1 = application_1;

    // Properties for 2nd Person
    this.name_2 = name_2;
    this.work_2 = work_2;
    this.quote_2 = quote_2;
    this.image_2 = image_2;
    this.duties_2 = duties_2;
    this.skills_2 = skills_2;
    this.enjoy_2 = enjoy_2;
    this.least_2 = least_2;
    this.education_2 = education_2;
    this.application_2 = application_2;
}

function parseData(data) {
    setVue();
    createPlan();
    for (i = 0; i < data.length; i += 2)
    {
        element_1 = data[i];
        name_1 = element_1['What is your name?'];
        work_1 = element_1['What is your job title?'];
        quote_1 = element_1['What advice would you give us or someone who wants to pursue this career?'];
        image_1 = element_1['Image'];
        duties_1 = element_1['What are your primary job duties?'];
        skills_1 = element_1['What skills do you use to succeed in your career?'];
        enjoy_1 = element_1['What do you enjoy most about your career?'];
        least_1 = element_1['What do you enjoy least about your career?'];
        education_1 = element_1['What education is required for your position?'];
        application_1 = element_1['How did you decide to apply for a position with National Cancer Institute at Frederick?']

        element_2 = data[i+1];
        name_2 = element_2['What is your name?'];
        work_2 = element_2['What is your job title?'];
        quote_2 = element_2['What advice would you give us or someone who wants to pursue this career?'];
        image_2 = element_2['Image'];
        duties_2 = element_2['What are your primary job duties?'];
        skills_2 = element_2['What skills do you use to succeed in your career?'];
        enjoy_2 = element_2['What do you enjoy most about your career?'];
        least_2 = element_2['What do you enjoy least about your career?'];
        education_2 = element_2['What education is required for your position?'];
        application_2 = element_2['How did you decide to apply for a position with National Cancer Institute at Frederick?']

        books.push(new BookPair(name_1, work_1, quote_1, image_1, duties_1, skills_1, enjoy_1, least_1, education_1, application_1, name_2, work_2, quote_2, image_2, duties_2, skills_2, enjoy_2, least_2, education_2, application_2));
    }
}

window.addEventListener('DOMContentLoaded', init)
