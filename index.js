document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user data from local storage
    const userDataString = localStorage.getItem('userData');
    
    if (userDataString) {
        const userData = JSON.parse(userDataString);
        
        // Display user name in index.html
        const userDataContainer = document.getElementById('userDataContainer');
        userDataContainer.innerHTML = `
            helloo <b>${userData.name}</b> 
            and your email is <b> ${userData.email}</b></p>
        `;
    } else {
        // If user data is not found, display a message
        const userDataContainer = document.getElementById('userDataContainer');
        userDataContainer.innerHTML = `<p style="text-decoration: none;" ><a href="./login/login.html">Please Sign-up !!!</a></p>`;
    }
    document.addEventListener('DOMContentLoaded', function() {
        // Get the sign-in form
        const signInForm = document.querySelector('.sign-in-container form');
    
        // Function to handle login
        function handleSignIn(event) {
            event.preventDefault(); // Prevent form submission
    
            // Get input values
            const email = signInForm.querySelector('input[name="email"]').value;
            const password = signInForm.querySelector('input[name="password"]').value;
    
            // Retrieve user data from local storage
            const userDataString = localStorage.getItem('userData');
    
            if (userDataString) {
                const userData = JSON.parse(userDataString);
    
                // Check if email and password match
                if (email === userData.email && password === userData.password) {
                    // Redirect to index.html
                    window.location.href = '../project main/sampleindex.html';
                } else {
                    // Display error message if credentials are incorrect
                    alert('Invalid email or password');
                }
            } else {
                // Display error message if no user data found
                alert('No user data found!');
            }
        }
    
        // Add event listener to the form for login submission
        signInForm.addEventListener('submit', handleSignIn);
    });
    
});
