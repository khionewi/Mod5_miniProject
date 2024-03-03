// Use Day.js to format the following variables:
// Today's date in the format of Sunday, February 14 2010, 3:25:50 pm.
var insertDate = dayjs();
$('#1a').text(today.format('MMM D, YYYY'));

//What is the current time?
var InsertTime = dayjs();
$('#1b').text(currentTime.format('h:mm:ss a'));



//### Task 1: Create a Form for Capturing User Input

var getProjectName = $('input[text=projectName]');
var getProjectType = $('input[dropdown="project-type"]');
var getDueDate = $('input[nate="due-date"]');


//### Task 2: Capture Form Data

//1. Using jQuery, set up functionality to capture the form's input elements on submit and use that data to create a new table row on the page.

//2. Select and save references to every DOM element we will interact with to a variable (i.e., `var projectFormEl = $("#project-form");`) so that we can use these elements later.

//3. Attach a submit event listener to the `<form>` element using jQuery.

//4. On submission, capture the input values from the form and update localStorage so that the projects that have been added are persistent. Clear the form data so that the user can easily add additional projects.

//5. Call the function to print the project data on the page.

//6. Ensure the modal closes when the user submits the <form action="" class="

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  console.log('ProjectName:', getProjectName.val());
  console.log('ProjectType:', getProjectType.val());
  console.log('DueDate:', getDueDate.val());
  
  // Clear input fields
  $('input[type="ProjectName"]').val('');
  $('input[type="ProjectType"]').val('');
  $('input[type="DueDate"]').prop('checked', false);
}


//### Task 3: Print Project Data to Page

//1. Create a function that will read the saved projects from localStorage.

//2. Create a table row (`<tr>`) element and save it to a variable.

//3. If the project is past due, give the row a class so that the row for the project will have a light red background. If the project is due today, give the row a class so that the row will have a light yellow background.

//4. Create a table detail (`<td>`) element for each of the corresponding project fields in Task 1.

//5. Append each `<td>` element to the `<tr>`.

//6. Append each `<tr>` to the `<tbody>` element on the page.

//7. Don't forget to clear the `<tbody>` before adding all the rows.

//8. Add a call to the function when the page loads.

//9. Update the function responsible for capturing form data so that it calls the function for printing the data.
// Submit event on the form
formEl.on('submit', handleFormSubmit);



readProjects();
function readProjects() {
  // Get stored projects from localStorage
  var storedProjects = JSON.parse(localStorage.getItem('projects'));

  // If projects were retrieved from localStorage, update the projects array to it
  if (storedProjects !== null) {
    projects = storedProjects;
  }

  // Render projects to the DOM
  renderProjects();
}

function renderProjects() {
    // Clear projectList element
    projectListEl.empty();
    
    // Render a new row for each project
    for (var i = 0; i < projects.length; i++) {
        // Get the current project object and its fields
        var project = projects[i];
        var projectName = project.projectName;
        var projectType = project.projectType;
        var dueDate = project.dueDate;
    
        // Create a new row element
        var row = $('<tr>');
    
        // Create a new data element for the project's name
        var projectNameTd = $('<td>').text(projectName);
    
        // Create a new data element for the project's type
        var projectTypeTd = $('<td>').text(projectType);
    
        // Create a new data element for the project's due date
        var dueDateTd = $('<td>').text(dueDate);
    
        // Append the newly created table data to the table row
        row.append(projectNameTd, projectTypeTd, dueDateTd);
    
        // Append the table row to the table body
        projectListEl.append(row);
    }
    }


//### Task 4: Delete a Project From the Table

//1. Update the table to accommodate one more column without a name.

//2. When generating a new `<tr>` for a project, add one more `<td>` that holds a button for deleting a project from the list.

//3. Use jQuery event delegation to attach an event listener to each of those buttons so that when clicked, the parent `<tr>` element will be removed from the page and the project is removed from localStorage. (HINT: How might using a data-* attribute be helpful?)-->
updateTable();
function updateTable() {
  // Clear the table
  projectListEl.empty();

  // Re-render the table
  renderProjects();
}

// When a element inside of the table is clicked
init();



