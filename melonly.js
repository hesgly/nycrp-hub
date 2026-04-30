export default async function handler(req, res) {
    const API_KEY = "7131c7a457096de6e1848afd70b893e681b6c2e2fc2922b02ad28a5e822c6684";
    const { endpoint } = req.query;

    console.log(`Attempting to fetch endpoint: ${endpoint}`);

    try {
        const response = await fetch(`https://api.melonly.xyz/api/v1${endpoint}`, {
            headers: { 
                'Authorization': API_KEY,
                'Accept': 'application/json',
                'User-Agent': 'NYCRP-Management-Hub/1.0'
            }
        });
        
        console.log(`Melonly Response Status: ${response.status}`);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Melonly Error Detail: ${errorText}`);
            return res.status(response.status).json({ error: "Melonly rejected", detail: errorText });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Fetch Execution Error:", error.message);
        return res.status(500).json({ error: "Fetch Execution Error", message: error.message });
    }
}
