export default async function handler(req, res) {
    const API_KEY = "7131c7a457096de6e1848afd70b893e681b6c2e2fc2922b02ad28a5e822c6684";
    const { endpoint } = req.query;

    try {
        const response = await fetch(`https://api.melonly.xyz/api/v1${endpoint}`, {
            headers: { 
                'Authorization': API_KEY,
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            return res.status(response.status).json({ error: "Melonly rejected request" });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
