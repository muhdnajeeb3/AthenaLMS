// src/utils/formatDate.js

export const FormatDate = (dateString) => {
    if (!dateString) return "N/A"; // Handle null, undefined, or empty strings
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date"; // Handle invalid date strings
    return date.toLocaleDateString("en-CA"); // Format as YYYY-MM-DD
  };
  
  // src/utils/formatDate.js

  export const FormatDateAndTime = (dateString) => {
    if (!dateString) return "N/A"; // Handle null, undefined, or empty strings
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date"; // Handle invalid date strings
    
    // Format date as YYYY-MM-DD and time as HH:MM
    return `${date.toLocaleDateString("en-CA")} ${date.toLocaleTimeString("en-CA", { hour: '2-digit', minute: '2-digit' })}`;
  };
  