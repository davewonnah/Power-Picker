// let electionCommission = {
//     election_id: {
//         election: {
//             title: "First election",
//             election_id: "",
//             election_discription: "",
//             election_start_time: "",
//             election_end_time: ""
//         },
//         candidates: [
//             // An array of candidate objects
//             {
//                 candidate_id: 1,
//                 name: "Candidate 1",
//                 party: "Party A",
//                 vote_count: 0,
//                 position: "President",
//                 image: "",
//                 election_id: ""
//             }
//         ],
//         voters: [
//             // An array of voter objects
//             {
//                 voter_id: 101,
//                 name: "Voter 1",
//                 voter_password: "001",
//                 image: "",
//                 election_id: "",
//                 time_voted: ""
//             }
//         ],
//     },
//     election_id: {
//         election: {
//             title: "First election",
//             election_id: "",
//             election_discription: "",
//             election_start_time: "",
//             election_end_time: ""
//         },
//         candidates: [
//             // An array of candidate objects
//             {
//                 candidate_id: 1,
//                 name: "Candidate 1",
//                 party: "Party A",
//                 vote_count: 0,
//                 position: "President",
//                 image: "",
//                 election_id: ""
//             }
//         ],
//         voters: [
//             // An array of voter objects
//             {
//                 voter_id: 101,
//                 name: "Voter 1",
//                 voter_password: "001",
//                 image: "",
//                 election_id: "",
//                 time_voted: ""
//             }
//         ],
//     },
// };



// console.log(electionCommission.election_id.election);
// console.log(electionCommission.election_id.candidates);
// console.log(electionCommission.election_id.voters);

// let submit_election_btn = document.getElementById('create-election-btn');

// submit_election_btn.addEventListener("click", function(event) {
//     // Prevent the default form submission behavior
//     event.preventDefault();

//     // Get all input elements inside the form
//     let inputFields = document.querySelectorAll('.create-election-info input, .create-election-info textarea');

//     // Check each input field
//     let allInputsFilled = true;

//     // Create an object to store the form data
//     let formData = {};

//     for (let i = 0; i < inputFields.length; i++) {
//         let field = inputFields[i];
//         if (field.value.trim() === '') {
//             alert("Please fill in all the required fields.");
//             allInputsFilled = false;
//             break; // Exit the loop on the first empty field
//         } else {
//             // Add the field value to the formData object
//             formData[field.id] = field.value;
//         }
//     }

//     // If all inputs are filled, proceed with form submission or other actions
//     if (allInputsFilled) {
//         alert("Form submitted successfully!");
//     }
// });


let submit_election_btn = document.getElementById('create-election-btn');

submit_election_btn.addEventListener("click", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get all input elements inside the form
    let inputFields = document.querySelectorAll('.create-election-info input, .create-election-info textarea');

    // Create an object to store the form data
    let formData = {};

    // Populate the formData object with input values
    inputFields.forEach(field => {
        formData[field.id] = field.value;
    });

    // Log the formData object to the console (you can modify this part)
    console.log(formData);

});


