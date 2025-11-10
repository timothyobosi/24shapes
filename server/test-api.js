// Simple test script to verify the API is working
// Run with: node test-api.js

const testData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1234567890',
  serviceType: 'blood-test',
  message: 'This is a test enquiry',
  preferredDate: '2025-11-15'
};

async function testAPI() {
  try {
    console.log('Testing API endpoint...\n');
    
    // Test health check
    console.log('1. Testing health check endpoint...');
    const healthResponse = await fetch('http://localhost:3001/api/health');
    const healthData = await healthResponse.json();
    console.log('Health check:', healthData);
    console.log('✓ Health check passed\n');

    // Test enquiry submission
    console.log('2. Testing enquiry submission...');
    const response = await fetch('http://localhost:3001/api/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    if (response.ok && result.success) {
      console.log('✓ Enquiry submitted successfully!');
      console.log('Response:', result);
    } else {
      console.log('✗ Enquiry submission failed');
      console.log('Response:', result);
    }

  } catch (error) {
    console.error('✗ Error testing API:', error.message);
    console.log('\nMake sure the server is running on http://localhost:3001');
  }
}

testAPI();
