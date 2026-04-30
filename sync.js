import { MelonlyClient } from @melonly-moderationapi-client;

export default async function handler(req, res) {
    const API_KEY = 7131c7a457096de6e1848afd70b893e681b6c2e2fc2922b02ad28a5e822c6684;
    
     Initialize the official Melonly Client
    const client = new MelonlyClient({ token API_KEY });

    try {
         Fetch server data using official methods
        const serverInfo = await client.getServerInfo();
        
         Return the data to your dashboard
        res.status(200).json(serverInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error Melonly Package Error, message error.message });
    }
}