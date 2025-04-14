
function getCurrentDateTime() {
    const now = new Date();
    return now.toString(); // Return readable date and time string
  }
  
  // Export the function
  module.exports.getCurrentDateTime = getCurrentDateTime;
  