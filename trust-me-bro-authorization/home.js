// Populate the key section with base64-encoded key strings and handle payload + submit.
(function () {
    const publicKey = '', privateKey = '';

    function toBase64(str) {
        try {
            return window.btoa(unescape(encodeURIComponent(str)));
        } catch (e) {
            // Fallback for environments without btoa
            if (typeof Buffer !== 'undefined') {
                return Buffer.from(str, 'utf-8').toString('base64');
            }
            return '';
        }
    }

    // Inserts a newline every 64 characters for display purposes
    function wrapEvery64(str) {
        if (!str) return '';
        const s = String(str).replace(/\r?\n/g, '');
        return s.replace(/(.{64})/g, '$1\n').trim();
    }

    const pubEl = document.getElementById('publicKeyBase64');
    const privEl = document.getElementById('privateKeyBase64');

    if (pubEl) pubEl.textContent = wrapEvery64(toBase64(publicKey));
    if (privEl) privEl.textContent = wrapEvery64(toBase64(privateKey));

    // Build and show payload
    const answerInput = document.getElementById('answerInput');
    const payloadPre = document.getElementById('payloadJson');
    const submitBtn = document.getElementById('submitBtn');
    const submitStatus = document.getElementById('submitStatus');

    // Placeholder endpoint: replace this string with your auth endpoint later.
    const AUTH_ENDPOINT = 'REPLACE_WITH_YOUR_AUTH_ENDPOINT';

    function buildPayload() {
        const answer = (answerInput?.value || '').trim();
        const payload = {
            "session-id":"",
            answer,
            // publicKeyBase64: pubEl?.textContent || '',
            // You can include other fields (nonce, timestamp, etc.) as needed for your API.
            timestamp: new Date().toISOString()
        };
        return payload;
    }

    function updatePayloadPreview() {
        const payload = buildPayload();
        if (payloadPre) {
            payloadPre.textContent = JSON.stringify(payload, null, 2);
        }
        // Enable submit only if answer is present and endpoint is configured.
        if (submitBtn) {
            const hasAnswer = !!payload.answer;
            const endpointConfigured = AUTH_ENDPOINT && AUTH_ENDPOINT !== 'REPLACE_WITH_YOUR_AUTH_ENDPOINT';
            submitBtn.disabled = !hasAnswer || !endpointConfigured;
            submitBtn.title = !endpointConfigured ? 'Set AUTH_ENDPOINT in the script to enable submit' : (hasAnswer ? '' : 'Enter an answer to enable submit');
        }
    }

    answerInput?.addEventListener('input', updatePayloadPreview);
    updatePayloadPreview();

    async function submitPayload() {
        const payload = buildPayload();
        if (!AUTH_ENDPOINT || AUTH_ENDPOINT === 'REPLACE_WITH_YOUR_AUTH_ENDPOINT') {
            submitStatus.textContent = 'Please set AUTH_ENDPOINT before submitting.';
            return;
        }
        try {
            submitBtn.disabled = true;
            submitStatus.textContent = 'Submitting...';
            const res = await fetch(AUTH_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const text = await res.text();
            if (!res.ok) {
                throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
            }
            submitStatus.textContent = 'Success: ' + text;
        } catch (err) {
            console.error(err);
            submitStatus.textContent = 'Error: ' + (err && err.message ? err.message : String(err));
        } finally {
            // Re-evaluate disabled state (depends on endpoint + answer)
            updatePayloadPreview();
        }
    }

    submitBtn?.addEventListener('click', submitPayload);
})();