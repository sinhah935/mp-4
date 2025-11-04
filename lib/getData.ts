
const API_KEY = process.env.API_KEY as string;

export default async function getData() {

    try {
        const res = await fetch('https://api.gamebrain.co/v1/games/suggestions?query=Call of Duty',
            {
                method: 'GET',
                headers: {
                    'x-api-key': API_KEY
                }
            });

        const data = await res.json();
        console.log(data);

        return data;
    } catch (error) {
        console.log("Error getData: " + error);
        return {error: error || "Failed to fetch data" } ;
    }
}
