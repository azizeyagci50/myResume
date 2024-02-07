import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import ayagci from '@salesforce/resourceUrl/ayagci';
export const PROFILE_IMAGE = ayagci 

export const SOCIAL_LINKS=[
    {
        type: "linkedin",
        label: "in/azizeyağcı",
        link: "https://www.linkedin.com/in/azizeyağcı",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/azizeyagci",
        link: "https://www.salesforce.com/trailblazer/azizeyagci",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    },
    {
        type: "github",
        label: "azizeyagci50",
        link: "https://github.com/azizeyagci50",
        icon: SOCIAL + '/SOCIAL/github.svg'
        }
    
]
export const USER_DETAILS={
    NAME:'AZİZE YAĞCI',
    ROLE:'SALESFORCE DEVELOPER',
    EMAIL:'azizeyagci67@gmail.com',
    PHONE:'+9 0505 6917990'
}
export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION:' Highly motivated and results-driven Salesforce Developer with two years of hands-on experience in designing, developing, and implementing Salesforce solutions to drive business growth and streamline processes. Adept at translating business requirements into technical solutions,  experienced in creating customized solutions on the Salesforce platform.Hands on experience in Agile methodology, system improvements to increase productivity Customer Relationship Management (CRM), Business Process Management (BPM), and Business Development concepts.',
   
}
export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Banking Domain ",
            DURATION: "June 2023– present" ,
            DESCRIPTION:"This Project is about American multinational financial services company which have offices throughout the United States and internationally. In Salesforce, we are building a Fixed Deposit application for Bank to process their fixed deposit applications. Customer deposits their money in bank for specific duration and they will get guaranteed interest on deposited money in fixed deposit. Also, a customer can have multiple deposits. End to end deposit applications will be processed in Salesforce. We have used several custom objects in this project.",
                
            DESCRIPTION_POINTS: [
               " •	Created user, roles, profiles and configure permissions according to organizational hierarchy requirement. ",
               " •	Used data loader to upload data to object",
               " •	Added Custom Objects and set their OWD/permissions and create Master object data ",
               " •	Developed Lightning app , Custom Lightning Component and Custom tabs ",
            ], 
            TECHNOLOGIES_USED: {
                HEADING: '',
                LIST: [
            
                ]
            }
                
},
    
  {
            
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Technical Support ",
            DURATION: "January 2023– May 2023 ",
            DESCRIPTION:"Technical Cloud products company got a huge market in cloud computing that provide cloud platform for virtualization and computing. Each cloud product is designed to simplify cloud operational management for cloud optimization on multiple platforms. This project is inclined towards Sales cloud processes that we have in our organization.We have built an application to manage the process through the engagement between sales agents and technical team collaborators.",
                
                    
            DESCRIPTION_POINTS: [
                " •	Created user profiles, custom objects, fields access using profiles, permission sets and field level security. ",
                " •	Created lightning actions, lightning flow, validation rules, approval process.",
                " •	Worked on communications through emails and Data analytics using reports. ",
                " •	Created Apex trigger with Apex handler classes, asynchronous batch apex and apex scheduler ",
                " •	Used workbench tool demo. ",
                " •	Created lightning web components for component composition-wired communications as well as imperative apex, navigation mixing, lightning message service with lightning map marker with geocoding data.", 
                " •	Worked with Apex REST service class for all HTTP method manipulation.",
                " •	Invoked apex REST endpoint, pass data to a custom Apex REST method by sending a request body in JSON.",
                    
                ],
                TECHNOLOGIES_USED: {
                    HEADING: '',
                    LIST: [
                
                    ]
                }
                
        },
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "E-Commerce Domain",
            DURATION: "April 2021 –  December 2022",
            DESCRIPTION:
                " This project is based on Sales Cloud. E-Commerce having lot of Spaces and Centers across the country, they rented their spaces to the customers. We are building this  application to manage their customers, new opportunities, contract and payments. We also   set up the case management so customer can raise the case in case of any issue. We started  on it from scratch and deployed final product into production successfully. I worked here on  all the areas like Configuration, Automation, Security, Triggers, Apex Classes, Batch Classes,  Lightning Web Components. ",
            DESCRIPTION_POINTS: [
                " •	Configured application settings, objects and field set up, sharing setting set up and profiles set up etc. ",
                "•	Created profiles, roles and configure permissions according to organizational hierarchy requirement. ",
                "•	Worked on Process builder, flows, approval process, HTML templates, push notifications and other configuration.",
                "•	Involved in creating and customizing email templates and configuring them to the email alert within the workflow rule for a standard/custom object.",
                "• Created Lightning Web Components ",
                "• Set up Data Model and Security Access model.",
                "• Written Apex Classes, Batch Classes, Triggers and Test Classes. ",
                "• Project deployment using change sets.",
 


            ],
            TECHNOLOGIES_USED : {
                HEADING: 'Technologies used',
                LIST: [
                    "Apex",
                    "Apex Classes",
                    "Triggers",
                    "Asynchronous Apex",
                    "Batch Class",
                    "Integration",
                    "SF Flow",
                    "Approval Process",
                    "Report and Dashboard",
                    "SOQL",
                    "SOSL",
                    "Javascript",
                    "HTML",
                    "CSS",
                    "Profile", 
                    "Permission Sets",
                    "Validation Rules",
                    "Sharing Rules",
                    "Change Sets (Deployment)",
                    "Visualforce ,Lightning Web Components (LWC)",
                    "SDLC(Agile and Scrum Methodologies)",
                    
                ]
            }
    }

 ]

}
export const EDUCATION_DATA={
    ICON: SOCIAL + '/SOCIAL/education.svg',
    HEADING: "EDUCATION",
    LIST:[
        {
            NAME: "Bachelor in History Education",
            UNIVERSITY_NAME: "MARMARA UNIVERSITY ",
            DURATION: "1997-2001",
        },
        {
            NAME: "Student in Computer Programming",
            UNIVERSITY_NAME: "ANADOLU UNIVERSITY",
            DURATION: "2023 - present",
        }
    ]
}
export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Administrator",
        },
        {
            NAME: "Salesforce Certified Platform Developer I",
        },
        
           
    ]
}
export const LANGUAGES_DATA={
    ICON: SOCIAL + '/SOCIAL/language.svg',
    HEADING: "Languages",
    LIST: [
        {
            NAME: "English",
            LEVEL:"Limited working proficiency",
        },
        {
            NAME: "Turkish",
            LEVEL: "Native",
        },
        
    ]
}

export const SKILLS_DATA ={

    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        
        {
            HEADING: " ",
            SKILLS_LIST: [
                { NAME: "Apex Class , Trigger , Test Class" },
                { NAME: "SDLC (Agile and Scrum Methodologies), " },
                { NAME: "Asynchronous Apex , Batch Apex" },
                { NAME: "SOAP , XML , JSON, REST "},
                { NAME: "Integration , Web Service"},
                { NAME: "Data loader , Data Import Wizard "},
                { NAME: "Sf Flow , Approval Process "},
                { NAME: "OOP , OQL , SOSL" },
                { NAME: "Jira , Git , Github" },
                { NAME: "HTML , CSS , Javascript" },
                { NAME: "Visual Studio Code"  },
                { NAME: "Report and Dashboard"},
                { NAME: "Lightning Web Component (LWC)"},
                { NAME: "Data Model , Security Model" },
                { NAME: "Validation Rules , Formulas" },
                { NAME: "Workbench , Postman " },
                { NAME: "Change Sets (Deployment) , Sandbox " },
                { NAME: "Profile , OWD Settings "},
                { NAME: "Sharing Rules , Permission Sets"},
                { NAME: "CPQ,Sales Cloud , Experience Cloud , Tableau "},

            ],
        }
    ],
    OTHERS_SKILLS:{
        HEADING: 'SOFT SKILLS',
        SKILLS_LIST: [
            "Problem Solving",
            "Team Work",
            "Motivation",
            "Communication",
            "Responsibility",
            "Time Management",
            "The Ability to Teach and Learn",
            "Easy Going",
            "Self Discipline"
           ]
    }    
 
}

export const INTERESTS_DATA = {
    HEADING: "INTERESTS",
    LIST: ["Reading", "Volleyball", "Music"]
}

