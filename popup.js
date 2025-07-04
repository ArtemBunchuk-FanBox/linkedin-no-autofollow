// Popup script for LinkedIn No Auto-Follow

document.addEventListener('DOMContentLoaded', async () => {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const statusMessage = document.getElementById('statusMessage');
  
  // Load current state
  const result = await chrome.storage.sync.get({ enabled: true });
  updateUI(result.enabled);
  
  // Handle toggle click
  toggleSwitch.addEventListener('click', async () => {
    const currentState = await chrome.storage.sync.get({ enabled: true });
    const newState = !currentState.enabled;
    
    // Save new state
    await chrome.storage.sync.set({ enabled: newState });
    
    // Update UI
    updateUI(newState);
  });
  
  function updateUI(enabled) {
    if (enabled) {
      toggleSwitch.classList.add('active');
      statusMessage.classList.remove('disabled');
      statusMessage.innerHTML = `
        <p>✅ Extension is active!</p>
        <p>The "Follow Company" checkbox will be automatically unchecked when applying for jobs on LinkedIn.</p>
      `;
    } else {
      toggleSwitch.classList.remove('active');
      statusMessage.classList.add('disabled');
      statusMessage.innerHTML = `
        <p>❌ Extension is disabled</p>
        <p>The "Follow Company" checkbox will NOT be automatically unchecked. Click the toggle to enable.</p>
      `;
    }
  }
});