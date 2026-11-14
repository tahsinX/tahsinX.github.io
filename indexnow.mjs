const payload = {
  host: 'tahsinx.github.io',
  key: '9124845a337a45579b151c1a1445179c',
  keyLocation: 'https://tahsinx.github.io/9124845a337a45579b151c1a1445179c.txt',
  urlList: [
    'https://tahsinx.github.io/'
  ]
};

async function submitIndexNow() {
  console.log('Submitting IndexNow payload to https://api.indexnow.org/indexnow ...');
  console.log(JSON.stringify(payload, null, 2));

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    const status = res.status;
    const body = await res.text();
    console.log(`IndexNow Response Status: ${status} (${res.statusText})`);

    if (status === 200) {
      console.log('✅ HTTP 200: URL submitted successfully.');
    } else if (status === 202) {
      console.log('✅ HTTP 202: URL accepted by IndexNow (key pending validation).');
    } else {
      console.warn(`⚠️ Unexpected status code: ${status}`);
      if (body) console.log('Response body:', body);
    }
  } catch (error) {
    console.error('❌ Error during IndexNow submission:', error);
  }
}

submitIndexNow();
