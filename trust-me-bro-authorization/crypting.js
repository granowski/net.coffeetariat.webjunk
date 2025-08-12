(function () {
    const testChallenge = {
        "sessionId": "06ebbf7b-cb60-43d3-8d10-751057012c42",
        "inquiry": "fx9yKx99lvTJsj0A08fOVYkZTv14nVdDea2jI/GEQ2SjHZ2gO0fEeeEvr2XJ8dyuzAltEqhSEObPc3EhHj1jgW4h1W/wNjovKjRqftDcIfDb+22WoBwnrMbJ46kpliNhaaONneG+ua3JCSL3/NOzRS3N0TFpcH6IBt0wdDWKvEp4EG6aZMiz4o5jsJvf0TsL6rOtwoRSPJymxXUXQIcR3lvvkglNDuVzj3uVnvbz7ZTB5jaIQXM6ukWrNomsGL3EV9v64/naB61wvBjcGOIfZlroBGOKsjq2J1ep7MBMCF/1lptHDrrfp09ZFR9WdODgNiHlMEksq/uZepYRUBbLdA=="
    };

    // Example key material (placeholder). In a real app, you might fetch or generate keys.
    // const publicKey = 'PUBLIC_KEY_SAMPLE_ABC123';
    const publicKey = '-----BEGIN PUBLIC KEY-----\n' +
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnQdY6H2tN9NwHj49JOXR\n' +
        'fcPGsNSjFlGWqfz3u7AHdvGXYvetiEKLgZsaCvkR5XsHqpm0e9LmgkQg2PwLHBYY\n' +
        'ioLx4HSlT5AfLTYzMYZpjc2IH5VnNXZaUZ2zwb7WFxSjig+4hz+J5x3AAq063mJ0\n' +
        '8lycoJs6dNlSTHSwJaS+oZCG98JXa2QHgfw5EnrwJ5jYU8BYCP1Av7sgKVtgckLl\n' +
        'GCPV6sQErIYXPU27qkM6VFM10FCADCpGXaN4H3R68TK7FewoobPMOTGI2UhIrYO4\n' +
        'QNA+4zU3G93KrkAfZYkWvgQKJLIZaPE8dM+O7QIJofDN/VdxfS+UWSC8rcDwfNYD\n' +
        'hQIDAQAB\n' +
        '-----END PUBLIC KEY-----';

    // const privateKey = 'PRIVATE_KEY_SAMPLE_XYZ789';
    const privateKey = '-----BEGIN PRIVATE KEY-----\n' +
        'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrv+fCYDFQB2Pk\n' +
        'GoSz3qg7dgGXCnirZm5cR779qLDlGFSQ15a45qTEFyPsuqm+EpOKn/QYrjkZa0bQ\n' +
        'VhPX0sxri3vp4haqQ2kV5BFP9JqchQlk9hbrmPUTj5LrMKG+0yMEHI6YoPCu/I2M\n' +
        'vxzcwrjlnHglG40XKE7KpE1Y73pbkvKmFeqX4Q0y3O0iCb289zU9lzCreOkWEeP4\n' +
        'CoPXjsni1AiolZ40Sfax1cjTE1254VK1UDPu4AuzYQfN+IghTK2SEuiHAaXh34xw\n' +
        'h52h2jQbLoK/CfQ07cE5XDwUzSVsO6RFe91EP8fjb9kyvbVYqoOIwg9kz2/RBm3D\n' +
        'gWXgNUq9AgMBAAECggEAOMK8el3GDlfS6IDnGHbejIAseFlqleLNWEwRz80fYSdQ\n' +
        'U2ocktEO5QtswQDTtlB3WFoSltGFZ2QvzAyWlD5DdstrUVl5+h07LpPoMM97BX1m\n' +
        'JGq8GnK7lBJgEMBKxEENEn/JlKGjyYEH2tsSU9c6ug+jGUhosZ2NpKT2Nw02F+sF\n' +
        '73JR27RV7WU17i/YGR862uQEr9ASSj4NQ0NgMsdnAu1wzhSaSQ6AaFEzcnWiW10q\n' +
        'XhW0YekcUBDGmVJtWYJuUrY0oQHa7kju/cN7avNSjTTyqkIkicPxlO/irZ90+k0+\n' +
        'ddz+bv6o2ShrVMmkIS0RzfxopqhsWXxwaIg+q3foFQKBgQDuXNtAvahLccjE1pWa\n' +
        'lqI1fneCzJ8fCzi3OJ94hYinmCgBG/akDoLuMHjNgnTnXvMjcGo1ev6W+k8IEbpx\n' +
        'OXhPW+Kbumtv5lUYNioyXLfPh4eQJySFCL2ugyYYH2t7xB5qQHyVoZg7y9cyIMY3\n' +
        'rZfXPDq53ZXyUqO6dTEwJxgXfwKBgQC4dT4BO/SWAFjlajkAKgocShaAGGcvfGsj\n' +
        '9knxqIY2mAOOea5luLJ8PqJytVgpZeSODBrDRtGUYq4XlgeR13ZJRwyHq3+BlzfL\n' +
        '6Lu/tDS1D8+PqT/nVNdmCobZWO+k4mrfR4k17gbZqoizxhXhRh6ieenLneG93Tdo\n' +
        'FiadSh8bwwKBgCXyEFFZH+6KuZxkUMKgUkhTzrC65GXrwmagk/p6v4t2lH/AtN3f\n' +
        'FYbXnpOQvg2LNwegQLgs0VS1mlk9gUG/FWEEzqld3vacY1WMYeFMk1JtT+5p3M10\n' +
        '28VpSWozrkewq+rcQzkK1ZJHXAW14/g/IVn5U5v9I37FGx12xJLW1mX/AoGAHJ5U\n' +
        'GGzs7bjwEegBH/1lxC3af9VJbRyootO7dTroV+AN7TUD0dRuHMi6+4EXRJUCeOd3\n' +
        '34RFT/hfellUo1QCjivvzbzV8406ovBg8MVMyCrD0U45E/Md2D8Z3O7nf3WBj1LR\n' +
        '/wQHHA5RV1MMYf83EY5Ir8a3F3YS+ps1MoIlgXECgYEA3kw+TFd7n7Jp5w9/AVE2\n' +
        'jfCm6leRVKVCeCkE67Y7X7K8/ljpgYQLokSJtU0DiljA3iysphpCvn/VkWnj1UGk\n' +
        'W4+uRMQ/1g8cDqDm/8Q0ypg/kuSUC/c0S9wAV5T8P3mrNpJW27th2Sa74c1RgAll\n' +
        'BfubP4GyUKzs0TEzvyrACS8=\n' +
        '-----END PRIVATE KEY-----\n'

    // Decrypt the testChallenge.inquiry using the privateKey and return plaintext string
    async function decryptTestInquiry() {
        const { inquiry } = testChallenge;
        const pem = privateKey;

        // Convert base64 to ArrayBuffer
        function base64ToArrayBuffer(b64) {
            const bin = atob(b64);
            const len = bin.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
            return bytes.buffer;
        }

        // Convert ArrayBuffer to UTF-8 string
        function arrayBufferToString(buf) {
            const dec = new TextDecoder();
            return dec.decode(new Uint8Array(buf));
        }

        // Parse PEM to ArrayBuffer (raw DER)
        function pemToArrayBuffer(pemStr) {
            const body = pemStr.replace(/-----BEGIN [^-]+-----/, '')
                .replace(/-----END [^-]+-----/, '')
                .replace(/\s+/g, '');
            return base64ToArrayBuffer(body);
        }

        async function importPrivateKeyWithHash(hash) {
            const keyData = pemToArrayBuffer(pem);
            return await crypto.subtle.importKey(
                'pkcs8',
                keyData,
                { name: 'RSA-OAEP', hash: { name: hash } },
                false,
                ['decrypt']
            );
        }

        async function tryDecrypt(hashName) {
            const key = await importPrivateKeyWithHash(hashName);
            const ciphertext = base64ToArrayBuffer(inquiry);
            debugger;
            const plaintextBuf = await crypto.subtle.decrypt({
                name: 'RSA-OAEP' }, key, ciphertext);
            return arrayBufferToString(plaintextBuf);
        }

        if (!('crypto' in window) || !window.crypto.subtle) {
            throw new Error('Web Crypto API not available in this environment.');
        }

        const text = await tryDecrypt('SHA-256');
        return text;
        // // Try SHA-256, then fallback to SHA-1
        // try {
        //
        // } catch (e1) {
        //     try {
        //         const text = await tryDecrypt('SHA-1');
        //         return text;
        //     } catch (e2) {
        //         console.error('Decryption failed with SHA-256 and SHA-1', e1, e2);
        //         throw new Error('Unable to decrypt inquiry with provided private key.');
        //     }
        // }
    }

    // Expose for external usage and log once for quick verification
    window.decryptTestInquiry = decryptTestInquiry;
    decryptTestInquiry().then(t => console.log('Decrypted inquiry:', t)).catch(err => console.warn('Decrypt test failed:', err));
})();