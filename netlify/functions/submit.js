// netlify/functions/submit.js
exports.handler = async function(event, context) {
    // Netlify functions automatically parse the incoming JSON body.
    const data = JSON.parse(event.body);
    const base64Payload = data.payload; // This is the Base64 data we are extracting.

    // Print the decoded data in the Netlify function logs.
    console.log("------[ PAYLOAD RECEIVED ]------");
    console.log("Raw Base64 Payload:", base64Payload);

    // Decode the Base64 string.
    try {
        const decodedData = Buffer.from(base64Payload, 'base64').toString('utf8');
        console.log("------[ DECODED DATA ]------");
        console.log(decodedData);
        console.log("----------------------------");
    } catch (e) {
        console.error("Base64 Decoding Failed:", e.message);
    }

    // A successful response must be returned, otherwise the frontend will encounter an error.
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Data received successfully" })
    };
};
