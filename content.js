// LinkedIn No Auto-Follow Content Script

async function checkAndUnfollowCompany() {
  // Check if extension context is still valid
  if (!chrome.runtime?.id) {
    return; // Extension context invalidated
  }
  
  try {
    // Check if extension is enabled (default: true)
    const result = await chrome.storage.sync.get({ enabled: true });
    
    if (!result.enabled) {
      return; // Extension is disabled
    }
  } catch (error) {
    // Extension context invalidated or other error
    console.log('LinkedIn No Auto-Follow: Extension context invalidated');
    return;
  }
  
  // Only run on LinkedIn pages with currentJobId
  if (!window.location.href.includes('linkedin.com') || 
      !window.location.href.includes('currentJobId')) {
    return;
  }
  
  // Look for the follow company checkbox
  const followCheckbox = document.getElementById('follow-company-checkbox');
  
  if (followCheckbox && followCheckbox.checked) {
    followCheckbox.click();
    console.log('LinkedIn No Auto-Follow: Unchecked follow company checkbox');
  }
}

// Run check with delay to let page load
setTimeout(checkAndUnfollowCompany, 1000);

// Watch for changes (LinkedIn loads content dynamically)
let timeoutId;
const observer = new MutationObserver(() => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(checkAndUnfollowCompany, 500);
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log('LinkedIn No Auto-Follow extension loaded');